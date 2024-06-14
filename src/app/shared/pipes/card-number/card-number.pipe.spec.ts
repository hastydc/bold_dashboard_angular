import { transactions } from '@app/api/data';
import { CardNumberPipe } from './card-number.pipe';

describe('CardNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new CardNumberPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform', () => {
    const pipe = new CardNumberPipe();

    const response = pipe.transform(transactions[0].cardNumber);

    expect(response).toEqual('**** **** **** 4444');
  });
});
