import { Pipe, PipeTransform } from '@angular/core';
import { PaymentMethod } from '@app/models/paymentMethod.enum';

/**
 * TransactionIconPipe
 */
@Pipe({
  name: 'transactionIcon',
  standalone: true,
})
export class TransactionIconPipe implements PipeTransform {
  /** fileName */
  private _fileName: { [key: string]: string } = {
    [PaymentMethod.DATAPHONE]: 'icon-dataphone',
    [PaymentMethod.LINK]: 'icon-chain',
  };

  /**
   * transform
   * @param {string} value
   * @returns {string} response
   */
  transform(value: string): string {
    return this._getIconUrl(value);
  }

  /**
   * _getIconUrl
   * @param {string} value
   * @returns {string} response
   */
  private _getIconUrl(value: string): string {
    return `./assets/icons/${this._fileName[value]}.svg`;
  }
}
