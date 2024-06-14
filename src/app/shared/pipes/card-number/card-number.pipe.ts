import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumber',
  standalone: true,
})
export class CardNumberPipe implements PipeTransform {
  transform(value: number | string): string {
    const source = value.toString();
    const lastNumbers: string = source.slice(-4);

    return `**** **** **** ${lastNumbers}`;
  }
}
