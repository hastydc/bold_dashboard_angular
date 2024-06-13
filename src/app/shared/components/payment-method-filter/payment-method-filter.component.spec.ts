import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodFilterComponent } from './payment-method-filter.component';

describe('PaymentMethodFilterComponent', () => {
  let component: PaymentMethodFilterComponent;
  let fixture: ComponentFixture<PaymentMethodFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentMethodFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentMethodFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
