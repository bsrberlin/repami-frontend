import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MatomoService {
    constructor() {
        this.listenForConsentChanges();
        this.initMatomo();
    }

    private initMatomo() {
        const tag = `
        <script type="text/plain" data-usercentrics="Matomo (self hosted)">
            var _paq = window._paq = window._paq || [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
                var u="//matomo.bsr.projekte.digitalklang.de/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '${environment.matomoSiteId}']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
        </script>`;
        document.head.insertAdjacentHTML('beforeend', tag);
    }

    trackPageView(url: string) {
        if ((window as any)._paq) {
            (window as any)._paq.push(['trackPageView', url]);
        }
    }

    private listenForConsentChanges() {
        window.addEventListener("UC_UI_CMP_EVENT", function(event) { 
            var e = event as CustomEvent
            if(e.detail.type == "ACCEPT_ALL" || e.detail.type == "DENY_ALL" || e.detail.type == "SAVE" ){
                window.location.reload()
            }
        });
    }
}
