import { PaymentType } from './paymentType.enum';
import { TransactionStatus } from './transactionStatus.enum';

export interface Transaction {
  id: string;
  status: TransactionStatus;
  paymentType: PaymentType;
  createdAt: number | string;
  cardNumber: number | string;
  amount: number;
  deduction?: number;
}
