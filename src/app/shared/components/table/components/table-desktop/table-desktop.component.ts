import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Transaction } from '@app/models/transaction.interface';
import { TransactionStatus } from '@app/models/transactionStatus.enum';
import { CardIconPipe } from '@app/shared/pipes/card-icon/card-icon.pipe';
import { CardNumberPipe } from '@app/shared/pipes/card-number/card-number.pipe';
import { TransactionIconPipe } from '@app/shared/pipes/transaction-icon/transaction-icon.pipe';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-table-desktop',
  standalone: true,
  imports: [
    TranslateModule,
    TransactionIconPipe,
    CardNumberPipe,
    CardIconPipe,
    CommonModule,
  ],
  templateUrl: './table-desktop.component.html',
  styleUrl: './table-desktop.component.scss',
})
export class TableDesktopComponent {
  @Input() transactions: Transaction[] = [];
  @Input() tableHeaders: string[] = [];
  @Input() dateType: string = '';

  transactionStatus = TransactionStatus;
}
