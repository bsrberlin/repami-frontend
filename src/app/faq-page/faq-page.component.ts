import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { StartseiteService } from '../api/services';
import { FAQSectionComponent } from '../start-page/faq-section/faq-section.component';
import { AllImportsModule } from '../all-imports.module';
import { LocaleService } from '../services/locale-service.service';

@Component({
  selector: 'app-faq-page',
  imports: [AllImportsModule, FAQSectionComponent],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.less'
})
export class FAQPageComponent implements OnInit, OnDestroy {
  private localeChangeSubscription: Subscription | undefined;
  faqSection: { id?: number; Frage?: string; Antwort?: string }[] | undefined;

  constructor(
    private startseiteService: StartseiteService,
    private localeService: LocaleService,
    private titleService: Title
  ) {
    this.titleService.setTitle('FAQ - repami');
  }

  ngOnInit(): void {
    this.localeChangeSubscription = this.localeService.localeChange$.subscribe(() => {
      this.getFaqData();
    });
  }

  ngOnDestroy(): void {
    this.localeChangeSubscription?.unsubscribe();
  }

  private getFaqData(): void {
    this.startseiteService.getStartseites({
      populate: 'FAQ.FAQ',
      locale: this.localeService.localeCode
    }).subscribe(response => {
      this.faqSection = response.data?.[0]?.attributes?.FAQ?.FAQ;
    });
  }
}
