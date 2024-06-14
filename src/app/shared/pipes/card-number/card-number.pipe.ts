import { Pipe, PipeTransform } from '@angular/core';

/**
 * CardNumberPipe
 */
@Pipe({
  name: 'cardNumber',
  standalone: true,
})
export class CardNumberPipe implements PipeTransform {
  /**
   * transform
   * @param {number | string} value
   * @returns {string} response
   */
  transform(value: number | string): string {
    const source = value.toString();
    const lastNumbers: string = source.slice(-4);

    return `**** **** **** ${lastNumbers}`;
  }
}
