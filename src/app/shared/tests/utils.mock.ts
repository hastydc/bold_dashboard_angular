import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

export class TranslateLoaderMock extends TranslateLoader {
  getTranslation(): Observable<any> {
    return of('');
  }
}

export const TranslateModuleMock = TranslateModule.forRoot({
  loader: {
    provide: TranslateLoader,
    useClass: TranslateLoaderMock,
  },
});
