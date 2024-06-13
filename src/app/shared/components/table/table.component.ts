import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { tableHeaders } from '@app/api/data';
import { Transaction } from '@app/models/transaction.interface';
import { TransactionStatus } from '@app/models/transactionStatus.enum';
import { CardIconPipe } from '@app/shared/pipes/card-icon/card-icon.pipe';
import { CardNumberPipe } from '@app/shared/pipes/card-number/card-number.pipe';
import { TransactionIconPipe } from '@app/shared/pipes/transaction-icon/transaction-icon.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { TableMobileComponent } from './components/table-mobile/table-mobile.component';
import { TableDesktopComponent } from './components/table-desktop/table-desktop.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    TranslateModule,
    TransactionIconPipe,
    CardNumberPipe,
    CardIconPipe,
    CommonModule,
    TableMobileComponent,
    TableDesktopComponent,
  ],
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() transactions: Transaction[] = [];
  @Input() tableHeaders: string[] = tableHeaders;
  @Input() dateType: string = 'Today';

  transactionStatus = TransactionStatus;
}
