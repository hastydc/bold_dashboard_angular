import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { currentDate } from '@app/api/data';
import { TransactionData } from '@app/models/transactionData.interface';
import { TransactionDate } from '@app/models/transactionDate.enum';
import { TransactionsService } from '@app/shared/services/transactions/transactions.service';
import { TranslateModule } from '@ngx-translate/core';

/**
 * DateSelectorComponent
 */
@Component({
  selector: 'app-date-selector',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './date-selector.component.html',
  styleUrl: './date-selector.component.scss',
})
export class DateSelectorComponent {
  /** transactionData */
  @Input() transactionData!: TransactionData;

  /** transactionsService */
  private readonly transactionsService: TransactionsService =
    inject(TransactionsService);

  /** dateOption */
  dateOption = TransactionDate;

  /** monthName */
  monthName: string = new Date(currentDate).toLocaleString('default', {
    month: 'long',
  });

  /** options */
  options = [
    {
      value: TransactionDate.TODAY,
    },
    {
      value: TransactionDate.WEEK,
    },
    {
      label: this.monthName,
      value: TransactionDate.MONTH,
    },
  ];

  /**
   * filterByDate
   * @param {TransactionData} date
   */
  filterByDate(date: TransactionDate): void {
    this.transactionsService.filterByDate(date, this.monthName);
  }
}
