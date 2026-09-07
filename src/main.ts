import { provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

// settings-id ist umgebungsabhängig (Build-Arg USERCENTRICS_SETTINGS_ID), daher zur Laufzeit eingefügt statt hartkodiert in index.html
const usercentricsScript = document.createElement('script');
usercentricsScript.id = 'usercentrics-cmp';
usercentricsScript.src = 'https://app.usercentrics.eu/browser-ui/latest/loader.js';
usercentricsScript.setAttribute('data-settings-id', environment.usercentricsSettingsId);
usercentricsScript.async = true;
document.head.appendChild(usercentricsScript);

bootstrapApplication(AppComponent, {...appConfig, providers: [provideZoneChangeDetection(), ...appConfig.providers]})
  .catch((err) => console.error(err));
