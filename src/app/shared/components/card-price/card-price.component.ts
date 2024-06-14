import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { currentDate } from '@app/api/data';
import { TransactionData } from '@app/models/transactionData.interface';
import { TransactionDate } from '@app/models/transactionDate.enum';
import { TranslateModule } from '@ngx-translate/core';

/**
  CardPriceComponent
 */
@Component({
  selector: 'app-card-price',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './card-price.component.html',
  styleUrl: './card-price.component.scss',
})
export class CardPriceComponent {
  /** transactionData */
  @Input() transactionData!: TransactionData;

  /** dateOption */
  dateOption = TransactionDate;

  /** monthName */
  monthName: string = new Date(currentDate).toLocaleString('default', {
    month: 'long',
  });

  /** dayNumber */
  dayNumber: number = new Date(currentDate).getDate();
}
