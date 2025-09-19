/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StartseiteLocalizationRequest } from '../../models/startseite-localization-request';
import { StartseiteLocalizationResponse } from '../../models/startseite-localization-response';

export interface PostStartseitesIdLocalizations$Params {
  id: number;
      body: StartseiteLocalizationRequest
}

export function postStartseitesIdLocalizations(http: HttpClient, rootUrl: string, params: PostStartseitesIdLocalizations$Params, context?: HttpContext): Observable<StrictHttpResponse<StartseiteLocalizationResponse>> {
  const rb = new RequestBuilder(rootUrl, postStartseitesIdLocalizations.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StartseiteLocalizationResponse>;
    })
  );
}

postStartseitesIdLocalizations.PATH = '/startseites/{id}/localizations';
