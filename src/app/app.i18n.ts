import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../environments/environment';

/**
 * httpLoaderFactory
 * @param {HttpClient} http
 * @returns {Object} response
 */
export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/**
 * provideTranslation
 * @returns {Object} response
 */
export const provideTranslation = () => ({
  defaultLanguage: environment.defaultLang,
  loader: {
    provide: TranslateLoader,
    useFactory: httpLoaderFactory,
    deps: [HttpClient],
  },
});
