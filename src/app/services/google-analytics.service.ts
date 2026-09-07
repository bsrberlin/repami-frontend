import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GoogleAnalyticsService {
    constructor() {
        this.listenForConsentChanges();
        this.initGoogleAnalytics();
    }

    private initGoogleAnalytics() {
        const tag = `
        <script async type="text/plain" data-usercentrics="${environment.usercentricsGtmServiceName}" src="https://www.googletagmanager.com/gtag/js?id=${environment.gaMeasurementId}"></script>
        <script type="text/plain" data-usercentrics="${environment.usercentricsGtmServiceName}">
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${environment.gaMeasurementId}');
        </script>`;
        document.head.insertAdjacentHTML('beforeend', tag);
    }

    trackPageView(url: string) {
        if ((window as any).gtag) {
            (window as any).gtag('event', 'page_view', { page_path: url });
        }
    }

    private listenForConsentChanges() {
        window.addEventListener("UC_UI_CMP_EVENT", function (event) {
            var e = event as CustomEvent
            if (e.detail.type == "ACCEPT_ALL" || e.detail.type == "DENY_ALL" || e.detail.type == "SAVE") {
                window.location.reload()
            }
        });
    }
}
