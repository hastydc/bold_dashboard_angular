import {
  animate,
  sequence,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TransactionData } from '@app/models/transactionData.interface';
import { TransactionStatus } from '@app/models/transactionStatus.enum';
import { CardIconPipe } from '@app/shared/pipes/card-icon/card-icon.pipe';
import { CardNumberPipe } from '@app/shared/pipes/card-number/card-number.pipe';
import { TransactionIconPipe } from '@app/shared/pipes/transaction-icon/transaction-icon.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { animations } from './table-mobile.animations';

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
  animations: animations,
  templateUrl: './table-mobile.component.html',
  styleUrl: './table-mobile.component.scss',
})
export class TableMobileComponent implements OnChanges {
  @Input() transactionData!: TransactionData;

  seeMore: { [key: string]: boolean } = {};
  transactionStatus = TransactionStatus;

  ngOnChanges(): void {
    if (
      !Object.keys(this.seeMore).length &&
      this.transactionData?.transactions
    ) {
      this.initSeeMore();
    }
  }

  initSeeMore(): void {
    this.transactionData.transactions.forEach(({ id }) => {
      this.seeMore[id] = false;
    });
  }

  toggleExpand(id: string): void {
    const value = !(this.seeMore[id]?.toString() === 'true');
    this.seeMore[id] = value;
  }
}
