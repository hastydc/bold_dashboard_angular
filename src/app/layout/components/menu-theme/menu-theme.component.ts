import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Theme } from '@app/models/theme.enum';
import { TranslateModule } from '@ngx-translate/core';

/**
 * MenuThemeComponent
 */
@Component({
  selector: 'app-menu-theme',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './menu-theme.component.html',
  styleUrl: './menu-theme.component.scss',
})
export class MenuThemeComponent {
  /** isDark */
  isDark: boolean = false;

  /**
   * toggleTheme
   */
  toggleTheme(): void {
    this.isDark = !this.isDark;

    document.body.setAttribute(
      'data-theme',
      this.isDark ? Theme.DARK : Theme.LIGHT
    );
  }
}
