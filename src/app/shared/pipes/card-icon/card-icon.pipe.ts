import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'cardIcon',
  standalone: true,
})
export class CardIconPipe implements PipeTransform {
  private readonly translateService: TranslateService =
    inject(TranslateService);
  private _visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
  private _mastercard = new RegExp('^5[1-5][0-9]{14}$');
  private _mastercard2 = new RegExp('^2[2-7][0-9]{14}$');

  transform(value: string): unknown {
    return this._getCreditCardIcon(value);
  }

  private _getCreditCardIcon(value: string): string {
    const url = `/assets/icons`;

    if (this._visa.test(value)) {
      return `${url}/icon-visa.svg`;
    }

    if (this._mastercard.test(value) || this._mastercard2.test(value)) {
      return `${url}/icon-mastercard.svg`;
    }

    return `${url}/icon-credit-card.svg`;
  }
}
