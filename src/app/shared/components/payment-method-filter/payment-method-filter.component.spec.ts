import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodFilterComponent } from './payment-method-filter.component';
import { TranslateModuleMock } from '@app/shared/tests/utils.mock';
import { HttpClientModule } from '@angular/common/http';
import {
  PaymentBaseFilter,
  PaymentMethod,
} from '@app/models/paymentMethod.enum';

describe('PaymentMethodFilterComponent', () => {
  let component: PaymentMethodFilterComponent;
  let fixture: ComponentFixture<PaymentMethodFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PaymentMethodFilterComponent,
        TranslateModuleMock,
        HttpClientModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentMethodFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggleList', () => {
    component.showList = true;

    component.toggleList();

    expect(component.showList).toBeFalse();
  });

  it('filter', () => {
    const spy = spyOn(
      (component as any).transactionsService,
      'filterByPayment'
    ).and.callThrough();
    component.filter();

    expect(spy).toHaveBeenCalledWith(component.selecteds);
  });

  it('onSelect', () => {
    component.onSelect({
      value: [PaymentMethod.DATAPHONE],
      option: { value: PaymentMethod.DATAPHONE },
    });

    expect(component.seeAll).toBeFalse();
  });

  it('onSelect allValue option', () => {
    component.seeAll = true;
    component.onSelect({
      value: [PaymentMethod.DATAPHONE],
      option: { value: PaymentBaseFilter.ALL },
    });

    expect(component.seeAll).toBeFalse();
  });

  it('onSelect allValue option and seeAll', () => {
    component.seeAll = false;
    component.onSelect({
      value: [PaymentMethod.DATAPHONE],
      option: { value: PaymentBaseFilter.ALL },
    });

    expect(component.seeAll).toBeTrue();
  });

  it('onSelect all options', () => {
    component.seeAll = false;
    component.onSelect({
      value: [PaymentMethod.DATAPHONE, PaymentMethod.LINK],
      option: { value: PaymentMethod.DATAPHONE },
    });

    expect(component.seeAll).toBeTrue();
  });
});
