import { PaymentType } from './paymentType.enum';
import { Transaction } from './transaction.interface';
import { TransactionDate } from './transactionDate.enum';

export interface TransactionData {
  transactions: Transaction[];
  totalSales: number;
  dateFilter: TransactionDate;
  monthName?: string;
  paymentTypeFilter?: PaymentType;
}
