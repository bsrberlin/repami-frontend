import { Component } from '@angular/core';
import { AllImportsModule } from '../all-imports.module';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { InstructionsSectionComponent } from './instructions-section/instructions-section.component';
import { SearchbarComponent } from '../components/searchbar.component';
import { RepairSectionComponent } from './repair-section/repair-section.component';
import { ReasonSectionComponent } from './reason-section/reason-section.component';
import { ParticipateSectionComponent } from './participate-section/participate-section.component';
import { FooterComponent } from '../footer/footer.component';
import { FAQSectionComponent } from './faq-section/faq-section.component';
import { MapSectionComponent } from './map-section/map-section.component';
import { StartseiteService } from '../api/services';
import { HeaderHeaderSektionComponent, NavigationselementListResponseDataItem, StartpageAnleitungSektionComponent, StartpageGruendeSektionComponent, StartpageMitmachenSektionComponent, StartpageReperaturSektionComponent } from '../api/models';
import { LocaleService } from '../services/locale-service.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-start-page',
    imports: [
        AllImportsModule,
        HeaderSectionComponent,
        MapSectionComponent,
        InstructionsSectionComponent,
        SearchbarComponent,
        RepairSectionComponent,
        ReasonSectionComponent,
        FAQSectionComponent,
        ParticipateSectionComponent,
        FooterComponent
    ],
    templateUrl: './start-page.component.html',
    styleUrl: './start-page.component.less'
})

export class StartPageComponent {
  private localeChangeSubscription: Subscription | undefined;
  startElementsHeader!: HeaderHeaderSektionComponent | undefined;

  nestedPropertiesHeader = ['Header', 'Header.Image'];
  propertiesToPopulateHeader = this.nestedPropertiesHeader.join(',');

  nestedPropertiesRepair = ['GrundStichpunktRechts', 'GrundStichpunktLinks'];
  propertiesToPopulateRepair = this.nestedPropertiesRepair.map(property => `Reperatur.${property}`).join(',')

  nestedPropertiesReason = ['Grund', 'Grund.Icon'];
  propertiesToPopulateReason = this.nestedPropertiesReason.map((property) => `Gruende.${property}`).join(',');

  instructionSection!: StartpageAnleitungSektionComponent | undefined;
  repairSection!: StartpageReperaturSektionComponent | undefined;
  reasonSection!: StartpageGruendeSektionComponent | undefined;
  faqSection!: { id?: number | undefined; Frage?: string | undefined; Antwort?: string | undefined; }[] | undefined;
  participateSection!: StartpageMitmachenSektionComponent | undefined;

  footerLinks!: NavigationselementListResponseDataItem[];

  constructor(
    private _startSeiteService: StartseiteService,
    private _localeService: LocaleService,
    private tabTitleService: Title
  ) {
    this.listenToLanguageChange();
    this.tabTitleService.setTitle("repami - Netzwerk Qualitätsreparatur");
  }

  private listenToLanguageChange() {
    this.localeChangeSubscription = this._localeService.localeChange$.subscribe(() => {
      this.getStartseiteData();
    });
  }

  ngOnDestroy() {
    if (this.localeChangeSubscription) {
      this.localeChangeSubscription.unsubscribe();
    }
  }

  async getStartseiteData() {
    this._startSeiteService.getStartseites({
      populate: `${this.propertiesToPopulateHeader}, Anleitung, ${this.propertiesToPopulateRepair}, ${this.propertiesToPopulateReason}, FAQ.FAQ, Mitmachen`,
      locale: this._localeService.localeCode
    }).subscribe(res => {
      if (Array.isArray(res.data) && res.data.length > 0) {
        const data = res.data[0];

        this.startElementsHeader = data.attributes?.Header;
        this.instructionSection = data.attributes?.Anleitung;
        this.repairSection = data.attributes?.Reperatur;
        this.reasonSection = data.attributes?.Gruende;
        this.faqSection = data.attributes?.FAQ?.FAQ;
        this.participateSection = data.attributes?.Mitmachen;
      }
    });
  }
}
