import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { currentDate } from '@app/api/data';
import { TransactionData } from '@app/models/transactionData.interface';
import { TransactionDate } from '@app/models/transactionDate.enum';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-card-price',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './card-price.component.html',
  styleUrl: './card-price.component.scss',
})
export class CardPriceComponent {
  @Input() transactionData!: TransactionData;

  dateOption = TransactionDate;

  monthName: string = new Date(currentDate).toLocaleString('default', {
    month: 'long',
  });

  dayName: number = new Date(currentDate).getDate();
}
