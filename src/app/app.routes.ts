import { Routes } from '@angular/router';
import { TestPageComponent } from './test-page/test-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { RepairProfilePageComponent } from './repair-profile-page/repair-profile-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { StaticPageComponent } from './custom-pages/static-page/static-page.component';
import { RepairProfileEditPageComponent } from './repair-profile-edit-page/repair-profile-edit-page.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'test', component: TestPageComponent },
  { path: 'register', component: RegistrationPageComponent },
  { path: 'login', component: LoginPageComponent },

  {
    path: 'reparaturbetriebsprofil/bearbeiten',
    component: RepairProfileEditPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'reparaturbetriebsprofil/:id',
    component: RepairProfilePageComponent,
  },
  { path: 'veranstaltungen', component: TestPageComponent },

  { path: 'ueber-uns', component: StaticPageComponent },
  { path: 'reparaturbonus', component: StaticPageComponent },
  { path: 'events', component: StaticPageComponent },
  { path: 'reparaturtipps', component: StaticPageComponent },
  { path: 'kontakt', component: StaticPageComponent },
  { path: 'impressum', component: StaticPageComponent },
  { path: 'datenschutz', component: StaticPageComponent },
  { path: 'teilnahmekriterien', component: StaticPageComponent },
  { path: 'nutzungsbedingungen', component: StaticPageComponent },
  { path: 'barrierearmutserklaerung', component: StaticPageComponent },
];
