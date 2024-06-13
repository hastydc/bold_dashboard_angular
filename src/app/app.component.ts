import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { TransactionsService } from './shared/services/transactions/transactions.service';
import { transactions } from './api/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly transactionsService = inject(TransactionsService);

  constructor() {
    this.transactionsService.setTransactions(transactions);
  }
}
