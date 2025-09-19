/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TestLocalizationRequest } from '../../models/test-localization-request';
import { TestLocalizationResponse } from '../../models/test-localization-response';

export interface PostTestsIdLocalizations$Params {
  id: number;
      body: TestLocalizationRequest
}

export function postTestsIdLocalizations(http: HttpClient, rootUrl: string, params: PostTestsIdLocalizations$Params, context?: HttpContext): Observable<StrictHttpResponse<TestLocalizationResponse>> {
  const rb = new RequestBuilder(rootUrl, postTestsIdLocalizations.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TestLocalizationResponse>;
    })
  );
}

postTestsIdLocalizations.PATH = '/tests/{id}/localizations';
