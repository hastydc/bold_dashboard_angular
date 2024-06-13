import { Pipe, PipeTransform } from '@angular/core';
import { PaymentType } from '@app/models/paymentType.enum';
import { Transaction } from '@app/models/transaction.interface';

@Pipe({
  name: 'transactionIcon',
  standalone: true,
})
export class TransactionIconPipe implements PipeTransform {
  private _fileName: { [key: string]: string } = {
    [PaymentType.DATAPHONE]: 'icon-dataphone',
    [PaymentType.LINK]: 'icon-chain',
  };

  transform(value: string): unknown {
    return this.getIconUrl(value);
  }

  private getIconUrl(value: string): string {
    return `/assets/icons/${this._fileName[value]}.svg`;
  }
}
