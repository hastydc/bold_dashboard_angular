import { PaymentMethod } from '@app/models/paymentMethod.enum';
import { Transaction } from '@app/models/transaction.interface';
import { TransactionStatus } from '@app/models/transactionStatus.enum';

/** currntDate */
const currentDate: number = 1718287180315;

/** tableHeaders */
const tableHeaders: string[] = [
  'transaction',
  'dateAndHour',
  'paymentMethod',
  'idTransactionBold',
  'amount',
];

/** transactions */
const transactions: Transaction[] = [
  {
    id: 'GZEN23784UBV1',
    status: TransactionStatus.SUCCESS,
    paymentMethod: PaymentMethod.DATAPHONE,
    createdAt: 1718287180315,
    cardNumber: 5555555555554444,
    amount: 25000,
    deduction: 1500,
  },
  {
    id: 'GZEN23784UBV2',
    status: TransactionStatus.FAILED,
    paymentMethod: PaymentMethod.DATAPHONE,
    createdAt: 1718287180315,
    cardNumber: 4012888888881881,
    amount: 25000,
  },
  {
    id: 'GZEN23784UBV3',
    status: TransactionStatus.SUCCESS,
    paymentMethod: PaymentMethod.LINK,
    createdAt: 1718287180315,
    cardNumber: 5105105105105100,
    amount: 25000,
    deduction: 1500,
  },
  {
    id: 'GZEN23784UBV4',
    status: TransactionStatus.FAILED,
    paymentMethod: PaymentMethod.DATAPHONE,
    createdAt: 1718200973040,
    cardNumber: 4012888888881881,
    amount: 25000,
  },
  {
    id: 'GZEN23784UBV5',
    status: TransactionStatus.SUCCESS,
    paymentMethod: PaymentMethod.DATAPHONE,
    createdAt: 1718114597202,
    cardNumber: 5105105105105100,
    amount: 25000,
    deduction: 1500,
  },
  {
    id: 'GZEN23784UBV6',
    status: TransactionStatus.FAILED,
    paymentMethod: PaymentMethod.LINK,
    createdAt: 1718028206697,
    cardNumber: 4012888888881881,
    amount: 25000,
  },
  {
    id: 'GZEN23784UBV7',
    status: TransactionStatus.SUCCESS,
    paymentMethod: PaymentMethod.DATAPHONE,
    createdAt: 1717942020820,
    cardNumber: 5105105105105100,
    amount: 25000,
    deduction: 1500,
  },
  {
    id: 'GZEN23784UBV8',
    status: TransactionStatus.FAILED,
    paymentMethod: PaymentMethod.DATAPHONE,
    createdAt: 1717855490610,
    cardNumber: 4012888888881881,
    amount: 25000,
  },
  {
    id: 'GZEN23784UBV9',
    status: TransactionStatus.SUCCESS,
    paymentMethod: PaymentMethod.LINK,
    createdAt: 1717855646238,
    cardNumber: 5105105105105100,
    amount: 25000,
    deduction: 1500,
  },
  {
    id: 'GZEN23784UBV10',
    status: TransactionStatus.FAILED,
    paymentMethod: PaymentMethod.DATAPHONE,
    createdAt: 1717769263630,
    cardNumber: 4012888888881881,
    amount: 25000,
  },
  {
    id: 'GZEN23784UBV11',
    status: TransactionStatus.SUCCESS,
    paymentMethod: PaymentMethod.DATAPHONE,
    createdAt: 1717683044974,
    cardNumber: 5105105105105100,
    amount: 25000,
    deduction: 1500,
  },
  {
    id: 'GZEN23784UBV12',
    status: TransactionStatus.FAILED,
    paymentMethod: PaymentMethod.LINK,
    createdAt: 1717596677140,
    cardNumber: 4012888888881881,
    amount: 25000,
  },
  {
    id: 'GZEN23784UBV13',
    status: TransactionStatus.SUCCESS,
    paymentMethod: PaymentMethod.DATAPHONE,
    createdAt: 1717510294080,
    cardNumber: 5105105105105100,
    amount: 25000,
    deduction: 1500,
  },
  {
    id: 'GZEN23784UBV14',
    status: TransactionStatus.FAILED,
    paymentMethod: PaymentMethod.DATAPHONE,
    createdAt: 1717423906331,
    cardNumber: 4012888888881881,
    amount: 25000,
  },
  {
    id: 'GZEN23784UBV15',
    status: TransactionStatus.SUCCESS,
    paymentMethod: PaymentMethod.LINK,
    createdAt: 1717337525843,
    cardNumber: 5105105105105100,
    amount: 25000,
    deduction: 1500,
  },
  {
    id: 'GZEN23784UBV16',
    status: TransactionStatus.FAILED,
    paymentMethod: PaymentMethod.DATAPHONE,
    createdAt: 1717251142656,
    cardNumber: 4012888888881881,
    amount: 25000,
  },
  {
    id: 'GZEN23784UBV17',
    status: TransactionStatus.SUCCESS,
    paymentMethod: PaymentMethod.LINK,
    createdAt: 1717164751873,
    cardNumber: 5105105105105100,
    amount: 25000,
    deduction: 1500,
  },
  {
    id: 'GZEN23784UBV18',
    status: TransactionStatus.FAILED,
    paymentMethod: PaymentMethod.DATAPHONE,
    createdAt: 1717164751873,
    cardNumber: 4012888888881881,
    amount: 25000,
  },
];

export { transactions, currentDate, tableHeaders };
