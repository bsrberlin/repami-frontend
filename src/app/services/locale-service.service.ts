import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageService } from '../api/services';
import { PageListResponseDataItem } from '../api/models';

@Injectable({
  providedIn: 'root'
})

export class LocaleService {
  private _localeSubject = new BehaviorSubject<string>('');

  constructor(
    private translate: TranslateService,
    private pageService: PageService
    ) { }

  public get localeCode(): string {
    return localStorage['_bsr_selected_language'];
  }

  public setLocale(locale: string): void {
    this.translate.use(locale).subscribe(() => {
      localStorage.setItem('_bsr_selected_language', locale);
      this._localeSubject.next(locale);
    });
  }

  get localeChange$() {
    return this._localeSubject.asObservable();
  }

  public getStaticPageData(locale: string, pathName: string): Observable<PageListResponseDataItem> {
    return new Observable(observer => {
      this.pageService.getPages({ 
        locale: locale
      }).subscribe(res => {
        const page = res.data && res.data.length > 0 ? res.data.find(item => item.attributes?.Path === pathName) : undefined;
        observer.next(page);
        observer.complete();
      });
    });
  }
}
