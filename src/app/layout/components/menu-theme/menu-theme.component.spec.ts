import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuThemeComponent } from './menu-theme.component';

describe('MenuThemeComponent', () => {
  let component: MenuThemeComponent;
  let fixture: ComponentFixture<MenuThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuThemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
