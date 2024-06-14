import { Injectable, inject, signal } from '@angular/core';
import {
  currentDate,
  transactions as defaultTransactions,
} from '@app/api/data';
import {
  PaymentBaseFilter,
  PaymentMethod,
} from '@app/models/paymentMethod.enum';
import { Transaction } from '@app/models/transaction.interface';
import { TransactionData } from '@app/models/transactionData.interface';
import { TransactionDate } from '@app/models/transactionDate.enum';
import { TransactionKey } from '@app/models/transactionKey.enum';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from '../api/api.service';
import { finalize } from 'rxjs';

/**
 * TransactionsService
 */
@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  /** translateService */
  private readonly translateService: TranslateService =
    inject(TranslateService);

  /** apiService */
  private readonly apiService: ApiService = inject(ApiService);

  /** transactions */
  transactions: Transaction[] = [];

  /** transactionData */
  private data = signal<TransactionData>({
    transactions: [],
    totalSales: 0,
    dateFilter: TransactionDate.TODAY,
  });

  /**
   * constructor
   */
  constructor() {
    this._loadData();
  }

  /**
   * getTransactions from signal
   * @returns {Transaction[]} response
   */
  getTransactions(): Transaction[] {
    return this.data().transactions!;
  }

  /**
   * getTransactionData from signal
   * @returns {TransactionData} response
   */
  getTransactionData(): TransactionData {
    return this.data();
  }

  /**
   * _loadData from json file or ts var
   */
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

  /**
   * filterByDate
   * @param {TransactionDate} date
   * @param {string} month
   */
  filterByDate(date: TransactionDate, month: string = ' '): void {
    this._setData({ ...this.data(), transactions: this.transactions });

    const methods = this._getPaymentMethods();

    this._filterByDate(date, month);
    this._filterByPaymentMethods(methods);
  }

  /**
   * filterByPayment
   * @param {PaymentMethod[]} methods
   */
  filterByPayment(methods: PaymentMethod[]): void {
    this._setData({ ...this.data(), transactions: this.transactions });

    const date = this._getDate();
    const month = this._getMonth();

    this._filterByPaymentMethods(methods);
    this._filterByDate(date, month);
  }

  /**
   * _setData set transaction data in signal
   * @param {TransactionData} data
   */
  private _setData(data: TransactionData): void {
    this.data.update(() => data);
  }

  /**
   * _filterByDate
   * @param {TransactionDate} date
   * @param {string} month
   */
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

  /**
   * _filterByToday
   */
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

  /**
   * _filterByWeek
   */
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

  /**
   * _fulterByMonth
   */
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

  /**
   * _filterByPaymentMethods
   * @param {PaymentMethod[]} methods
   */
  private _filterByPaymentMethods(methods: PaymentMethod[]): void {
    const list = this.data().transactions;
    const result = list.filter(({ paymentMethod }: Transaction) =>
      methods.includes(paymentMethod)
    );

    this._setData({
      ...this.data(),
      transactions: result,
      paymentMethods: methods,
    });

    localStorage.setItem(
      TransactionKey.PAYMENT_METHODS,
      JSON.stringify(methods)
    );
    this._setTotal();
  }

  /**
   * _setTotal
   */
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

  /**
   * _getPaymentMethods
   * @returns {string[]} response
   */
  private _getPaymentMethods(): PaymentMethod[] {
    return JSON.parse(
      localStorage.getItem(TransactionKey.PAYMENT_METHODS) ??
        `["${PaymentMethod.DATAPHONE}","${PaymentMethod.LINK}","${PaymentBaseFilter.ALL}"]`
    );
  }

  /**
   * _getDate
   * @returns {string} response
   */
  private _getDate(): TransactionDate {
    return (localStorage.getItem(TransactionKey.DATE) ??
      TransactionDate.TODAY) as TransactionDate;
  }

  /**
   * _getMonth
   * @returns {string} response
   */
  private _getMonth(): string {
    return localStorage.getItem(TransactionKey.MONTH) ?? ' ';
  }
}
