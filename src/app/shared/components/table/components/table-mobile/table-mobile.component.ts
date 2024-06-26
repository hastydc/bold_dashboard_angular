import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { TransactionData } from '@app/models/transactionData.interface';
import { TransactionStatus } from '@app/models/transactionStatus.enum';
import { CardIconPipe } from '@app/shared/pipes/card-icon/card-icon.pipe';
import { CardNumberPipe } from '@app/shared/pipes/card-number/card-number.pipe';
import { TransactionIconPipe } from '@app/shared/pipes/transaction-icon/transaction-icon.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { animations } from './table-mobile.animations';

/**
 * TableMobileComponent
 */
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
  /** transactionData */
  @Input() transactionData!: TransactionData;

  /** seeMore */
  seeMore: { [key: string]: boolean } = {};

  /** transactionStatus */
  transactionStatus = TransactionStatus;

  /**
   * ngOnChanges
   */
  ngOnChanges(): void {
    if (this.transactionData?.transactions) {
      this.initSeeMore();
    }
  }

  /**
   * initSeeMore
   */
  initSeeMore(): void {
    this.transactionData.transactions.forEach(({ id }) => {
      this.seeMore[id] = false;
    });
  }

  /**
   * toggleExpand
   * @param {string} id
   */
  toggleExpand(id: string): void {
    this.seeMore[id] = !this.seeMore[id];
  }
}
