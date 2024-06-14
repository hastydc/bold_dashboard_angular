import { Pipe, PipeTransform } from '@angular/core';

/**
 * CardIconPipe
 */
@Pipe({
  name: 'cardIcon',
  standalone: true,
})
export class CardIconPipe implements PipeTransform {
  /** _visa regexp */
  private _visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');

  /** _mastercard regexp */
  private _mastercard = new RegExp('^5[1-5][0-9]{14}$');

  /**
   * transform
   * @param {string} value
   * @returns {string} response
   */
  transform(value: string): string {
    return this._getCreditCardIcon(value);
  }

  /**
   * _getCreditCardIcon
   * @param {string} value
   * @returns {string} response
   */
  private _getCreditCardIcon(value: string): string {
    const url = `./assets/icons`;

    if (this._visa.test(value)) {
      return `${url}/icon-visa.svg`;
    }

    if (this._mastercard.test(value)) {
      return `${url}/icon-mastercard.svg`;
    }

    return `${url}/icon-credit-card.svg`;
  }
}
