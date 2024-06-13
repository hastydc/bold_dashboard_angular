import { PaymentType } from '@app/models/paymentType.enum';
import { Transaction } from '@app/models/transaction.interface';
import { TransactionStatus } from '@app/models/transactionStatus.enum';

const currentDate: number = 1718424298;

const transactions: Transaction[] = [
  {
    id: 'GZEN23784UBV1',
    status: TransactionStatus.SUCCESS,
    paymentType: PaymentType.DATAPHONE,
    createdAt: 1718424298,
    cardNumber: 5555555555554444,
    amount: 25000,
    deduction: 15000,
  },
  {
    id: 'GZEN23784UBV2',
    status: TransactionStatus.FAILED,
    paymentType: PaymentType.DATAPHONE,
    createdAt: 1718424298,
    cardNumber: 4012888888881881,
    amount: 25000,
  },
  {
    id: 'GZEN23784UBV3',
    status: TransactionStatus.SUCCESS,
    paymentType: PaymentType.LINK,
    createdAt: 1718424298,
    cardNumber: 5105105105105100,
    amount: 25000,
    deduction: 15000,
  },
  {
    id: 'GZEN23784UBV4',
    status: TransactionStatus.FAILED,
    paymentType: PaymentType.DATAPHONE,
    createdAt: 1718337967,
    cardNumber: 4012888888881881,
    amount: 25000,
  },
  {
    id: 'GZEN23784UBV5',
    status: TransactionStatus.SUCCESS,
    paymentType: PaymentType.DATAPHONE,
    createdAt: 1718251567,
    cardNumber: 5105105105105100,
    amount: 25000,
    deduction: 15000,
  },
  {
    id: 'GZEN23784UBV6',
    status: TransactionStatus.FAILED,
    paymentType: PaymentType.LINK,
    createdAt: 1718165167,
    cardNumber: 4012888888881881,
    amount: 25000,
  },
  {
    id: 'GZEN23784UBV7',
    status: TransactionStatus.SUCCESS,
    paymentType: PaymentType.DATAPHONE,
    createdAt: 1718078767,
    cardNumber: 5105105105105100,
    amount: 25000,
    deduction: 15000,
  },
  {
    id: 'GZEN23784UBV8',
    status: TransactionStatus.FAILED,
    paymentType: PaymentType.DATAPHONE,
    createdAt: 1717992367,
    cardNumber: 4012888888881881,
    amount: 25000,
  },
  {
    id: 'GZEN23784UBV9',
    status: TransactionStatus.SUCCESS,
    paymentType: PaymentType.LINK,
    createdAt: 1717905967,
    cardNumber: 5105105105105100,
    amount: 25000,
    deduction: 15000,
  },
  {
    id: 'GZEN23784UBV10',
    status: TransactionStatus.FAILED,
    paymentType: PaymentType.DATAPHONE,
    createdAt: 1717819567,
    cardNumber: 4012888888881881,
    amount: 25000,
  },
  {
    id: 'GZEN23784UBV11',
    status: TransactionStatus.SUCCESS,
    paymentType: PaymentType.DATAPHONE,
    createdAt: 1717733167,
    cardNumber: 5105105105105100,
    amount: 25000,
    deduction: 15000,
  },
  {
    id: 'GZEN23784UBV12',
    status: TransactionStatus.FAILED,
    paymentType: PaymentType.LINK,
    createdAt: 1717646767,
    cardNumber: 4012888888881881,
    amount: 25000,
  },
  {
    id: 'GZEN23784UBV13',
    status: TransactionStatus.SUCCESS,
    paymentType: PaymentType.DATAPHONE,
    createdAt: 1717560367,
    cardNumber: 5105105105105100,
    amount: 25000,
    deduction: 15000,
  },
  {
    id: 'GZEN23784UBV14',
    status: TransactionStatus.FAILED,
    paymentType: PaymentType.DATAPHONE,
    createdAt: 1717473967,
    cardNumber: 4012888888881881,
    amount: 25000,
  },
  {
    id: 'GZEN23784UBV15',
    status: TransactionStatus.SUCCESS,
    paymentType: PaymentType.LINK,
    createdAt: 1717387567,
    cardNumber: 5105105105105100,
    amount: 25000,
    deduction: 15000,
  },
  {
    id: 'GZEN23784UBV16',
    status: TransactionStatus.FAILED,
    paymentType: PaymentType.DATAPHONE,
    createdAt: 1717301167,
    cardNumber: 4012888888881881,
    amount: 25000,
  },
];
