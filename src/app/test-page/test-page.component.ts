import { Component } from '@angular/core';
import { PageService } from '../api/services';
import { AllImportsModule } from '../all-imports.module';
import { firstValueFrom } from 'rxjs';
import { LocaleService } from '../services/locale-service.service';

@Component({
    selector: 'app-test-page',
    imports: [AllImportsModule],
    templateUrl: './test-page.component.html',
    styleUrl: './test-page.component.less'
})
export class TestPageComponent {
  inner_html: string | undefined = 'reparaturnetzwerk-frontend';
  selectedButton: string = 'karte';
  reperaturbetriebInfoId: number = 1;

  constructor(private pageService: PageService, private localeService: LocaleService) {
    this.getData();
  }

  async getData() {
    const startpages = await firstValueFrom(this.pageService.getPages({locale: this.localeService.localeCode}));
    const pageData = startpages.data?.find(x => x.attributes?.Title?.toLowerCase() == "startpage");
    this.inner_html = pageData?.attributes?.Content;
  }
}
