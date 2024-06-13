import { Injectable, inject, signal } from '@angular/core';
import { currentDate, transactions } from '@app/api/data';
import { Transaction } from '@app/models/transaction.interface';
import { TransactionData } from '@app/models/transactionData.interface';
import { TransactionDate } from '@app/models/transactionDate.enum';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private readonly translateService: TranslateService =
    inject(TranslateService);
  private data = signal<TransactionData>({
    transactions: [],
    totalSales: 0,
    dateFilter: TransactionDate.TODAY,
  });

  constructor() {
    this.data.update(() => ({
      transactions,
      totalSales: 0,
      dateFilter: TransactionDate.TODAY,
    }));

    this.filterByDate(TransactionDate.TODAY);

    /*const date = new Date(currentDate);
    this.filterByDate(
      TransactionDate.MONTH,
      date.toLocaleString('default', { month: 'long' })
    );*/
  }

  getTransactions(): Transaction[] {
    return this.data().transactions!;
  }

  getTransactionData(): TransactionData {
    return this.data();
  }

  filterByDate(date: TransactionDate, month: string = ' '): void {
    const monthName = this.translateService.instant(month);

    this._setData({ ...this.data(), dateFilter: date, monthName });
    this._filterByDate(date);
  }

  private _setData(data: TransactionData): void {
    this.data.update(() => data);
  }

  private _filterByDate(date: TransactionDate): void {
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
  }

  private _filterByToday(): void {
    const list = this.data().transactions!;

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
}
