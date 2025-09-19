/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StartpageLocalizationRequest } from '../../models/startpage-localization-request';
import { StartpageLocalizationResponse } from '../../models/startpage-localization-response';

export interface PostStartpageLocalizations$Params {
      body: StartpageLocalizationRequest
}

export function postStartpageLocalizations(http: HttpClient, rootUrl: string, params: PostStartpageLocalizations$Params, context?: HttpContext): Observable<StrictHttpResponse<StartpageLocalizationResponse>> {
  const rb = new RequestBuilder(rootUrl, postStartpageLocalizations.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StartpageLocalizationResponse>;
    })
  );
}

postStartpageLocalizations.PATH = '/startpage/localizations';
