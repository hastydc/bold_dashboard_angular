import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

/**
 * Translate Loader mock
 */
export class TranslateLoaderMock extends TranslateLoader {
  /**
   * getTranslation fn mock
   * @returns {Observable} response
   */
  getTranslation(): Observable<any> {
    return of('');
  }
}

/**
 * TranslateModuleMock fn
 */
export const TranslateModuleMock = TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useClass: TranslateLoaderMock,
  },
});
