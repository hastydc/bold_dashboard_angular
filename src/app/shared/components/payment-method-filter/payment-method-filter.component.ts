import { Component, Input, inject } from '@angular/core';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { TransactionData } from '@app/models/transactionData.interface';
import { TranslateModule } from '@ngx-translate/core';
import { PaymentBaseFilter, PaymentType } from '@app/models/paymentType.enum';
import { TransactionsService } from '@app/shared/services/transactions/transactions.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-method-filter',
  standalone: true,
  imports: [TranslateModule, CdkListbox, CdkOption, CommonModule],
  templateUrl: './payment-method-filter.component.html',
  styleUrl: './payment-method-filter.component.scss',
})
export class PaymentMethodFilterComponent {
  @Input() transactionData!: TransactionData;

  private readonly transactionsService = inject(TransactionsService);
  options = [PaymentType.DATAPHONE, PaymentType.LINK];
  optionAll = PaymentBaseFilter.ALL;
  seeAll: boolean = false;
  selecteds: any[] = [];
  showList: boolean = false;

  toggleList(): void {
    this.showList = !this.showList;
  }

  onSelect(event: any): void {
    const value = event.value;
    const isAllOption = event.option.value === PaymentBaseFilter.ALL;

    if (isAllOption) {
      this.seeAll = !this.seeAll;
    }

    if (isAllOption && this.seeAll) {
      this.selecteds = [...this.options, this.optionAll];
      return;
    }

    if (isAllOption && !this.seeAll) {
      this.selecteds = [];
      return;
    }

    this.seeAll = false;
    this.selecteds = value.filter(
      (value: string) => value != PaymentBaseFilter.ALL
    );
  }

  filter(): void {
    this.transactionsService.filterByPayment(this.selecteds);
  }
}
