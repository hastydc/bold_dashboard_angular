import { PaymentType } from '@app/models/paymentType.enum';
import { TransactionIconPipe } from './transaction-icon.pipe';

describe('TransactionIconPipe', () => {
  it('create an instance', () => {
    const pipe = new TransactionIconPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform', () => {
    const pipe = new TransactionIconPipe();
    const response = pipe.transform(PaymentType.LINK);

    expect(response).toEqual('./assets/icons/icon-chain.svg');
  });
});
