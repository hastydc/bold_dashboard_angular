import { Component } from '@angular/core';
import { MenuDesktopComponent } from '../menu-desktop/menu-desktop.component';
import { MenuMobileComponent } from '../menu-mobile/menu-mobile.component';
import { LogoComponent } from '@app/shared/components/logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';
import { MenuIconComponent } from '../menu-icon/menu-icon.component';
import { MenuItem } from '@app/models/menuItem.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenuDesktopComponent,
    MenuMobileComponent,
    MenuIconComponent,
    LogoComponent,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public showMenu: boolean = false;
  public menuItems: MenuItem[] = [
    { link: '/', label: 'myBusiness' },
    { link: '/', label: 'help', info: true },
  ];

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
