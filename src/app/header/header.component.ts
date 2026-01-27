import { Component, HostListener } from '@angular/core';
import { AllImportsModule } from '../all-imports.module';
import { Router, RouterLink } from '@angular/router';
import { NavigationselementService } from '../api/services';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SearchbarComponent } from '../components/searchbar.component';
import { NavigationselementListResponseDataItem } from '../api/models';
import { LocaleService } from '../services/locale-service.service';
import { LoggedInUserService } from '../services/loggedin-user.service';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-header',
    imports: [AllImportsModule, RouterLink, SearchbarComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.less'
})
export class HeaderComponent {
  navigationElements!: NavigationselementListResponseDataItem[];
  languages: any[] = [];
  selectedLanguage: string = '';
  visible: boolean = false;
  private scrollThreshold = 550;
  isNavbarFixed: boolean = false;
  private localeChangeSubscription: Subscription | undefined;
  isLoggedIn: boolean = false;
  isCustomSites: boolean = false;

  constructor(
    private navService: NavigationselementService,
    private http: HttpClient,
    private _localeService: LocaleService,
    public _loggedInUserService: LoggedInUserService,
    private router: Router
  ) {
    this.getData();
    this.getLanguages();
    this.listenToLanguageChange();
    this.checkIfLoggedIn();

    router.events.subscribe((val) => {
      if (window.location.pathname === '/') {
        this.isCustomSites = false;
      } else {
        this.isCustomSites = true;
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollY = window.scrollY || window.pageYOffset;
    this.isNavbarFixed = scrollY > this.scrollThreshold;
  }

  private listenToLanguageChange() {
    this.localeChangeSubscription = this._localeService.localeChange$.subscribe(
      () => {
        this.getData();
      }
    );
  }

  ngOnDestroy() {
    if (this.localeChangeSubscription) {
      this.localeChangeSubscription.unsubscribe();
    }
  }

  async getData() {
    this.navService
      .getNavigationselements({
        locale: this._localeService.localeCode,
        sort: 'id',
      })
      .subscribe((res) => {
        this.navigationElements = res.data!;
      });
  }

  async getLanguages() {
    this.http
      .get<any[]>(`${environment.strapiUrl}/api/i18n/locales`, {
        observe: 'response',
      })
      .subscribe((response) => {
        this.languages = response.body!;
      });
  }

  changeLanguage(language: any) {
    this.selectedLanguage = language.code;
    this._localeService.setLocale(this.selectedLanguage);
  }

  toggleDrawer() {
    this.visible = !this.visible;
  }
  async checkIfLoggedIn() {
    await this._loggedInUserService.checkTokenValidity();
  }
  logout() {
    localStorage.clear();
    window.location.href = '/';
  }
}
