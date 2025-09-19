/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReparaturcafeRequest } from '../../models/reparaturcafe-request';
import { ReparaturcafeResponse } from '../../models/reparaturcafe-response';

export interface PutReparaturcafesId$Params {
  id: number;
      body: ReparaturcafeRequest
}

export function putReparaturcafesId(http: HttpClient, rootUrl: string, params: PutReparaturcafesId$Params, context?: HttpContext): Observable<StrictHttpResponse<ReparaturcafeResponse>> {
  const rb = new RequestBuilder(rootUrl, putReparaturcafesId.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ReparaturcafeResponse>;
    })
  );
}

putReparaturcafesId.PATH = '/reparaturcafes/{id}';
