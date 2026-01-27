import { Component, OnInit } from '@angular/core';
import { AllImportsModule } from '../../all-imports.module';
import { marked } from 'marked';
import { Subscription } from 'rxjs';
import { PageListResponseDataItem } from '../../api/models';
import { LocaleService } from '../../services/locale-service.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'static-page',
    imports: [AllImportsModule],
    templateUrl: './static-page.component.html',
    styleUrl: './static-page.component.less'
})

export class StaticPageComponent implements OnInit{
  private localeChangeSubscription: Subscription | undefined;
  currentPath: string;

  data: Subscription | undefined;
  page: PageListResponseDataItem | undefined;
  htmlContent: string | undefined;
  
  constructor(
    private _localeService: LocaleService,
    private tabTitleService: Title
  ) {
    this.currentPath = location.pathname.slice(1);
  }

  async ngOnInit() {
    this.listenToLanguageChange();
  }

  private listenToLanguageChange() {
    this.localeChangeSubscription = this._localeService.localeChange$.subscribe(() => {
      this.getData();
    });
  }

  ngOnDestroy() {
    if (this.localeChangeSubscription) {
      this.localeChangeSubscription.unsubscribe();
    }
  }

  async getData() {
    this.data = this._localeService.getStaticPageData(this._localeService.localeCode, this.currentPath).subscribe(
      async (page: PageListResponseDataItem) => {
        this.page = page;
        this.htmlContent = await marked(this.page.attributes?.Content ?? '');
        
        if (this.page?.attributes?.Title) {
          this.tabTitleService.setTitle(this.page.attributes.Title + " - repami");
        }
      }
    )
  }
}
