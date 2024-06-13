import { TestBed } from '@angular/core/testing';

import { TransactionsService } from './transactions.service';
import { TranslateModuleMock } from '@app/shared/tests/utils.mock';
import { HttpClientModule } from '@angular/common/http';

describe('TransactionsService', () => {
  let service: TransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModuleMock, HttpClientModule],
    });
    service = TestBed.inject(TransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
