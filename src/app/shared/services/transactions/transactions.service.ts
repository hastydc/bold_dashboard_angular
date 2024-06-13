import { Injectable, signal } from '@angular/core';
import { Transaction } from '@app/models/transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private transactions = signal<Transaction[]>([]);

  setTransactions(value: Transaction[]): void {
    this.transactions.update(() => value);
  }

  getTransactions(): Transaction[] {
    return this.transactions();
  }
}
