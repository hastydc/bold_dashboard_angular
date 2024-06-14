import { Injectable, inject, signal } from '@angular/core';
import {
  currentDate,
  transactions as defaultTransactions,
} from '@app/api/data';
import { PaymentBaseFilter, PaymentType } from '@app/models/paymentType.enum';
import { Transaction } from '@app/models/transaction.interface';
import { TransactionData } from '@app/models/transactionData.interface';
import { TransactionDate } from '@app/models/transactionDate.enum';
import { TransactionKey } from '@app/models/transactionKey.enum';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../api/api.service';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private readonly translateService: TranslateService =
    inject(TranslateService);

  private readonly apiService: ApiService = inject(ApiService);

  transactions: Transaction[] = [];

  private data = signal<TransactionData>({
    transactions: [],
    totalSales: 0,
    dateFilter: TransactionDate.TODAY,
  });

  constructor() {
    this._loadData();
  }

  getTransactions(): Transaction[] {
    return this.data().transactions!;
  }

  getTransactionData(): TransactionData {
    return this.data();
  }

  private _loadData(): void {
    this.apiService
      .getData()
      .pipe(
        finalize(() => {
          const methods = this._getPaymentMethods();

          this.filterByPayment(methods);
        })
      )
      .subscribe({
        next: (response) => {
          this.transactions = response;
        },
        error: () => {
          this.transactions = defaultTransactions;
        },
      });
  }

  filterByDate(date: TransactionDate, month: string = ' '): void {
    this._setData({ ...this.data(), transactions: this.transactions });

    const methods = this._getPaymentMethods();

    this._filterByDate(date, month);
    this._filterByPaymentMethods(methods);
  }

  filterByPayment(methods: PaymentType[]): void {
    this._setData({ ...this.data(), transactions: this.transactions });

    const date = this._getDate();
    const month = this._getMonth();

    this._filterByPaymentMethods(methods);
    this._filterByDate(date, month);
  }

  private _setData(data: TransactionData): void {
    this.data.update(() => data);
  }

  private _filterByDate(date: TransactionDate, month: string = ' '): void {
    const monthName = this.translateService.instant(month);
    this._setData({ ...this.data(), dateFilter: date, monthName });

    switch (date) {
      case TransactionDate.TODAY:
        this._filterByToday();
        break;

      case TransactionDate.WEEK:
        this._filterByWeek();
        break;

      case TransactionDate.MONTH:
        this._filterByMonth();
        break;
    }

    localStorage.setItem(TransactionKey.DATE, date);
    localStorage.setItem(TransactionKey.MONTH, `${this.data().monthName}`);
    this._setTotal();
  }

  private _filterByToday(): void {
    const list = this.data().transactions;

    this._setData({
      ...this.data(),
      transactions: list.filter(({ createdAt }: Transaction) => {
        const base = new Date(createdAt);
        const current = new Date(currentDate);

        return base.getDate() === current.getDate();
      }),
    });
  }

  private _filterByWeek(): void {
    const list = this.data().transactions;

    this._setData({
      ...this.data(),
      transactions: list.filter(({ createdAt }: Transaction) => {
        const base = new Date(createdAt);
        const current = new Date(currentDate);
        const minDay = current.getDate() + 1 - current.getDay();
        const maxDay = minDay + 6;

        return base.getDate() <= maxDay && base.getDate() >= minDay;
      }),
    });
  }

  private _filterByMonth(): void {
    const list = this.data().transactions;

    this._setData({
      ...this.data(),
      transactions: list.filter(({ createdAt }: Transaction) => {
        const base = new Date(createdAt);
        const current = new Date(currentDate);

        return base.getMonth() === current.getMonth();
      }),
    });
  }

  private _filterByPaymentMethods(methods: PaymentType[]): void {
    const list = this.data().transactions;
    const result = list.filter(({ paymentType }: Transaction) =>
      methods.includes(paymentType)
    );

    this._setData({
      ...this.data(),
      transactions: result,
      paymentTypes: methods,
    });

    localStorage.setItem(
      TransactionKey.PAYMENT_METHODS,
      JSON.stringify(methods)
    );
    this._setTotal();
  }

  private _setTotal(): void {
    const list = this.data().transactions;
    const totalSales = list.reduce(
      (accumulator, current) => accumulator + current.amount,
      0
    );

    this._setData({
      ...this.data(),
      totalSales,
    });
  }

  private _getPaymentMethods() {
    return JSON.parse(
      localStorage.getItem(TransactionKey.PAYMENT_METHODS) ??
        `["${PaymentType.DATAPHONE}","${PaymentType.LINK}","${PaymentBaseFilter.ALL}"]`
    );
  }

  private _getDate() {
    return (localStorage.getItem(TransactionKey.DATE) ??
      TransactionDate.TODAY) as TransactionDate;
  }

  private _getMonth() {
    return localStorage.getItem(TransactionKey.MONTH) ?? ' ';
  }
}
