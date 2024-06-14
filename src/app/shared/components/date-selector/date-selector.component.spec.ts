import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSelectorComponent } from './date-selector.component';
import { TranslateModuleMock } from '@app/shared/tests/utils.mock';
import { HttpClientModule } from '@angular/common/http';
import { TransactionDate } from '@app/models/transactionDate.enum';

describe('DateSelectorComponent', () => {
  let component: DateSelectorComponent;
  let fixture: ComponentFixture<DateSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateSelectorComponent, TranslateModuleMock, HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('filterDate', () => {
    component.monthName = 'June';
    const spy = spyOn(
      (component as any).transactionsService,
      'filterByDate'
    ).and.callThrough();
    component.filterByDate(TransactionDate.TODAY);

    expect(spy).toHaveBeenCalledWith(TransactionDate.TODAY, 'June');
  });
});
