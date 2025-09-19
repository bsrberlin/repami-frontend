import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { AllImportsModule } from './all-imports.module';
import { StrapiProvidersModule } from './strapi-providers.module';
import { ApiModule } from './api/api.module';
import { HeaderComponent } from './header/header.component';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { Subscription } from 'rxjs';
import { NavigationselementListResponseDataItem } from './api/models';
import { NavigationselementService } from './api/services';
import { LocaleService } from './services/locale-service.service';
import { ParticipateSectionComponent } from './start-page/participate-section/participate-section.component';
import { SharedService } from './services/shared.service';
import { MatomoService } from './services/matomo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ApiModule, AllImportsModule, HeaderComponent, FooterComponent, ParticipateSectionComponent],
  providers: [StrapiProvidersModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})

export class AppComponent implements OnInit {
  private localeChangeSubscription: Subscription | undefined;
  footerLinks!: NavigationselementListResponseDataItem[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService,
    private _navigationselementService: NavigationselementService,
    private _localeService: LocaleService,
    private matomoService: MatomoService
  ) {
    this.listenToLanguageChange();
  }

  private listenToLanguageChange() {
    this.localeChangeSubscription = this._localeService.localeChange$.subscribe(() => {
      this.getFooterData();
    });
  }

  ngOnDestroy() {
    if (this.localeChangeSubscription) {
      this.localeChangeSubscription.unsubscribe();
    }
  }

  async getFooterData() {
    this._navigationselementService.getNavigationselements({
      locale: this._localeService.localeCode,
      sort: 'id',
    }).subscribe(res => {
      this.footerLinks = res.data!;
    });
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // track pageview
        this.matomoService.trackPageView(this.router.url);
      }
      if (!(event instanceof NavigationEnd)) {
        return;
      }

      // Check if the target route has a fragment (anchor)
      const fragment = this.activatedRoute.snapshot.fragment;

      if (fragment) {
        // If it's an anchor point, scroll to the element with the corresponding id
        const element = document.getElementById(fragment);

        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 200)
        }
      } else {
        if (!this.sharedService.searchExecuted.value) {
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        } else {
          this.sharedService.updateSearchExecuted(false);
        }
      }
    });
  }
}