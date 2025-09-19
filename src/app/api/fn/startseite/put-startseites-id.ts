/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StartseiteRequest } from '../../models/startseite-request';
import { StartseiteResponse } from '../../models/startseite-response';

export interface PutStartseitesId$Params {
  id: number;
      body: StartseiteRequest
}

export function putStartseitesId(http: HttpClient, rootUrl: string, params: PutStartseitesId$Params, context?: HttpContext): Observable<StrictHttpResponse<StartseiteResponse>> {
  const rb = new RequestBuilder(rootUrl, putStartseitesId.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StartseiteResponse>;
    })
  );
}

putStartseitesId.PATH = '/startseites/{id}';
