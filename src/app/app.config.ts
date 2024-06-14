import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslation } from './app.i18n';

/**
 * appConfig
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    provideRouter(routes, withHashLocation()),
    importProvidersFrom([
      HttpClientModule,
      TranslateModule.forRoot(provideTranslation()),
    ]),
  ],
};
