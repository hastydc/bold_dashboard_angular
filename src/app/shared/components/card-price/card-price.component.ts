import { Component, Input } from '@angular/core';
import { TransactionData } from '@app/models/transactionData.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-card-price',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './card-price.component.html',
  styleUrl: './card-price.component.scss',
})
export class CardPriceComponent {
  @Input() transactionData!: TransactionData;
}
