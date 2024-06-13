import { Component, effect, inject } from '@angular/core';
import { TransactionData } from '@app/models/transactionData.interface';
import { CardPriceComponent } from '@app/shared/components/card-price/card-price.component';
import { DateSelectorComponent } from '@app/shared/components/date-selector/date-selector.component';
import { PaymentMethodFilterComponent } from '@app/shared/components/payment-method-filter/payment-method-filter.component';
import { TableComponent } from '@app/shared/components/table/table.component';
import { TransactionsService } from '@app/shared/services/transactions/transactions.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TableComponent,
    CardPriceComponent,
    DateSelectorComponent,
    PaymentMethodFilterComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private readonly transactionsService = inject(TransactionsService);
  transactionData!: TransactionData;
  monthName: string = '';

  constructor() {
    effect(() => {
      this.transactionData = this.transactionsService.getTransactionData();
    });
  }
}
