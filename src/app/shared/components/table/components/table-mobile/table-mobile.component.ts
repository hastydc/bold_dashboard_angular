import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TransactionData } from '@app/models/transactionData.interface';
import { TransactionStatus } from '@app/models/transactionStatus.enum';
import { CardIconPipe } from '@app/shared/pipes/card-icon/card-icon.pipe';
import { CardNumberPipe } from '@app/shared/pipes/card-number/card-number.pipe';
import { TransactionIconPipe } from '@app/shared/pipes/transaction-icon/transaction-icon.pipe';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-table-mobile',
  standalone: true,
  imports: [
    TranslateModule,
    TransactionIconPipe,
    CardNumberPipe,
    CardIconPipe,
    CommonModule,
  ],
  templateUrl: './table-mobile.component.html',
  styleUrl: './table-mobile.component.scss',
})
export class TableMobileComponent {
  @Input() transactionData!: TransactionData;

  transactionStatus = TransactionStatus;
}
