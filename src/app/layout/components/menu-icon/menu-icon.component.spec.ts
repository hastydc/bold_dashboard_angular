import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIconComponent } from './menu-icon.component';
import { TranslateModuleMock } from '@app/shared/tests/utils.mock';
import { ActivatedRoute } from '@angular/router';

describe('MenuIconComponent', () => {
  let component: MenuIconComponent;
  let fixture: ComponentFixture<MenuIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuIconComponent, TranslateModuleMock],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggleMenu', () => {
    const spy = spyOn(component.actionToggleMenu, 'emit').and.callThrough();
    component.toggleMenu();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
