import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMobileComponent } from './table-mobile.component';
import { transactions } from '@app/api/data';
import { TransactionData } from '@app/models/transactionData.interface';

describe('TableMobileComponent', () => {
  let component: TableMobileComponent;
  let fixture: ComponentFixture<TableMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableMobileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnChanges', () => {
    component.seeMore = {};
    component.transactionData = { transactions } as TransactionData;

    component.ngOnChanges();

    expect(Object.keys(component.seeMore).length).toBeGreaterThan(0);
  });

  it('toggleExpand', () => {
    component.toggleExpand(transactions[0].id);

    expect(component.seeMore[transactions[0].id]).toBeTrue();
  });
});
