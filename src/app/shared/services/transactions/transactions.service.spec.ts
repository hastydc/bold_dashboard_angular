import { TestBed } from '@angular/core/testing';

import { TransactionsService } from './transactions.service';
import { TranslateModuleMock } from '@app/shared/tests/utils.mock';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api/api.service';
import { throwError } from 'rxjs';
import { transactions } from '@app/api/data';
import { TransactionDate } from '@app/models/transactionDate.enum';
import { PaymentBaseFilter, PaymentType } from '@app/models/paymentType.enum';

describe('TransactionsService', () => {
  let service: TransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModuleMock, HttpClientModule],
    });
    service = TestBed.inject(TransactionsService);
    service.transactions = transactions;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getTransactions', () => {
    const response = service.getTransactions();

    expect(response.length).toBeDefined();
  });

  it('loadData', () => {
    TestBed.inject(ApiService).getData = jasmine
      .createSpy()
      .and.returnValue(throwError(() => ''));

    (service as any)._loadData();

    expect(service.transactions).toEqual(transactions);
  });

  it('filterByDate', () => {
    service.filterByDate(TransactionDate.TODAY);

    expect(service.getTransactions()).toBeDefined();
  });

  it('_filterByDate today', () => {
    const spy = spyOn(service as any, '_filterByToday').and.callThrough();
    (service as any)._filterByDate(TransactionDate.TODAY);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('filterByDate week', () => {
    const spy = spyOn(service as any, '_filterByWeek').and.callThrough();
    service.filterByDate(TransactionDate.WEEK);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('filterByDate month', () => {
    const spy = spyOn(service as any, '_filterByMonth').and.callThrough();
    service.filterByDate(TransactionDate.MONTH);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('_getPaymentMethods', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    const methods = (service as any)._getPaymentMethods();

    expect(methods).toEqual([
      PaymentType.DATAPHONE,
      PaymentType.LINK,
      PaymentBaseFilter.ALL,
    ]);
  });

  it('_getDate', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    const date = (service as any)._getDate();

    expect(date).toEqual(TransactionDate.TODAY);
  });

  it('_getMonth', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    const month = (service as any)._getMonth();

    expect(month).toEqual(' ');
  });
});
