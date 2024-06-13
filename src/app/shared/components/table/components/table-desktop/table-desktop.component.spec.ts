import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDesktopComponent } from './table-desktop.component';

describe('TableDesktopComponent', () => {
  let component: TableDesktopComponent;
  let fixture: ComponentFixture<TableDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
