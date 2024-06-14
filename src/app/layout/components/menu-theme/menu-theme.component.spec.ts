import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuThemeComponent } from './menu-theme.component';
import { TranslateModuleMock } from '@app/shared/tests/utils.mock';

describe('MenuThemeComponent', () => {
  let component: MenuThemeComponent;
  let fixture: ComponentFixture<MenuThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuThemeComponent, TranslateModuleMock],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggleTheme', () => {
    component.isDark = false;
    component.toggleTheme();

    expect(component.isDark).toBeTrue();
  });

  it('toggleTheme light', () => {
    component.isDark = true;
    component.toggleTheme();

    expect(component.isDark).toBeFalse();
  });
});
