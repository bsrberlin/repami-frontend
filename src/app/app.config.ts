import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { PageService } from './api/services';

import { routes } from './app.routes';
import { de_DE, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/de';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

registerLocaleData(de);


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    PageService, 
    provideNzI18n(de_DE), 
    importProvidersFrom(FormsModule), 
    provideHttpClient(), 
    provideAnimations(),
    provideTranslateService({
      fallbackLang: localStorage['_bsr_selected_language'] || 'de',
      loader: provideTranslateHttpLoader(),
    }),
  ]
};
