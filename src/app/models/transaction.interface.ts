import { PaymentMethod } from './paymentMethod.enum';
import { TransactionStatus } from './transactionStatus.enum';

/** Transaction */
export interface Transaction {
  /** id */
  id: string;

  /** status */
  status: TransactionStatus;

  /** paymentMethod */
  paymentMethod: PaymentMethod;

  /** createdAt */
  createdAt: number | string;

  /** cardNumber */
  cardNumber: number | string;

  /** amount */
  amount: number;

  /** deduction */
  deduction?: number;
}
