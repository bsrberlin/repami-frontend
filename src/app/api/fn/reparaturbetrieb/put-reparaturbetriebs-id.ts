/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReparaturbetriebRequest } from '../../models/reparaturbetrieb-request';
import { ReparaturbetriebResponse } from '../../models/reparaturbetrieb-response';

export interface PutReparaturbetriebsId$Params {
  id: number;
      body: ReparaturbetriebRequest
}

export function putReparaturbetriebsId(http: HttpClient, rootUrl: string, params: PutReparaturbetriebsId$Params, context?: HttpContext): Observable<StrictHttpResponse<ReparaturbetriebResponse>> {
  const rb = new RequestBuilder(rootUrl, putReparaturbetriebsId.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ReparaturbetriebResponse>;
    })
  );
}

putReparaturbetriebsId.PATH = '/reparaturbetriebs/{id}';
