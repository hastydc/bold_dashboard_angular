import { PaymentMethod } from './paymentMethod.enum';
import { Transaction } from './transaction.interface';
import { TransactionDate } from './transactionDate.enum';

/**
 * TransactionData
 */
export interface TransactionData {
  /** transactions */
  transactions: Transaction[];

  /** totalSales */
  totalSales: number;

  /** dateFilter */
  dateFilter: TransactionDate;

  /** payment */
  paymentMethods?: PaymentMethod[];

  /** monthName */
  monthName?: string;
}
