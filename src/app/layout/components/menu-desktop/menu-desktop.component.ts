import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from '@app/models/menuItem.interface';
import { TranslateModule } from '@ngx-translate/core';

/**
 * MenuDesktopComponent
 */
@Component({
  selector: 'app-menu-desktop',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './menu-desktop.component.html',
  styleUrl: './menu-desktop.component.scss',
})
export class MenuDesktopComponent {
  /** menuItems */
  @Input() menuItems: MenuItem[] = [];
}
