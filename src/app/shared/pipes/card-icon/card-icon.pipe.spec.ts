import { transactions } from '@app/api/data';
import { CardIconPipe } from './card-icon.pipe';

describe('CardIconPipe', () => {
  it('create an instance', () => {
    const pipe = new CardIconPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform mastercard', () => {
    const pipe = new CardIconPipe();

    const response = pipe.transform(transactions[0].cardNumber.toString());

    expect(response).toEqual('./assets/icons/icon-mastercard.svg');
  });

  it('transform visa', () => {
    const pipe = new CardIconPipe();

    const response = pipe.transform(transactions[1].cardNumber.toString());

    expect(response).toEqual('./assets/icons/icon-visa.svg');
  });

  it('transform default', () => {
    const pipe = new CardIconPipe();

    const response = pipe.transform('x');

    expect(response).toEqual('./assets/icons/icon-credit-card.svg');
  });
});
