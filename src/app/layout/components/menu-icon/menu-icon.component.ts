import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-icon.component.html',
  styleUrl: './menu-icon.component.scss',
})
export class MenuIconComponent {
  @Input() active: boolean = false;

  @Output() actionToggleMenu: EventEmitter<void> = new EventEmitter<void>();

  toggleMenu(): void {
    this.actionToggleMenu.emit();
  }
}