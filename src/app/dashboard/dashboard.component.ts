import { Component, effect, inject } from '@angular/core';
import { Transaction } from '@app/models/transaction.interface';
import { TableComponent } from '@app/shared/components/table/table.component';
import { TransactionsService } from '@app/shared/services/transactions/transactions.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private readonly transactionsService = inject(TransactionsService);
  transactions: Transaction[] = [];

  constructor() {
    effect(() => {
      this.transactions = this.transactionsService.getTransactions();
    });
  }
}
