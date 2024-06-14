import { Component, Input, OnChanges, inject } from '@angular/core';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { TransactionData } from '@app/models/transactionData.interface';
import { TranslateModule } from '@ngx-translate/core';
import {
  PaymentBaseFilter,
  PaymentMethod,
} from '@app/models/paymentMethod.enum';
import { TransactionsService } from '@app/shared/services/transactions/transactions.service';
import { CommonModule } from '@angular/common';

/**
 * PaymentMethodFilter
 */
@Component({
  selector: 'app-payment-method-filter',
  standalone: true,
  imports: [TranslateModule, CdkListbox, CdkOption, CommonModule],
  templateUrl: './payment-method-filter.component.html',
  styleUrl: './payment-method-filter.component.scss',
})
export class PaymentMethodFilterComponent implements OnChanges {
  /** transactionData */
  @Input() transactionData!: TransactionData;

  /** transactionsService */
  private readonly transactionsService = inject(TransactionsService);

  /** options for select list */
  options = [PaymentMethod.DATAPHONE, PaymentMethod.LINK];

  /** optionAll */
  optionAll = PaymentBaseFilter.ALL;

  /** seeAll */
  seeAll: boolean = false;

  /** selecteds */
  selecteds: any[] = [];

  /** showList */
  showList: boolean = false;

  /**
   * ngOnChanges
   */
  ngOnChanges(): void {
    this.selecteds = this.transactionData?.paymentMethods ?? [];
  }

  /**
   * toggleList
   */
  toggleList(): void {
    this.showList = !this.showList;
  }

  /**
   * onSelectEvent
   * @param {Object} event
   */
  onSelect(event: any): void {
    const value = event.value.filter(
      (option: string) => option !== this.optionAll
    );
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

    if (value.length === this.options.length) {
      this.selecteds = [...value, this.optionAll];
      this.seeAll = true;
    } else {
      this.selecteds = [...value];
      this.seeAll = false;
    }
  }

  /**
   * filter
   */
  filter(): void {
    this.transactionsService.filterByPayment(this.selecteds);
    this.showList = false;
  }
}
