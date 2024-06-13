import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from '@app/models/menuItem.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss',
})
export class MenuMobileComponent {
  @Input() active: boolean = true;
  @Input() menuItems: MenuItem[] = [];

  @Output() actionToggleMenu: EventEmitter<void> = new EventEmitter<void>();

  toggleMenu(): void {
    this.actionToggleMenu.emit();
  }
}
