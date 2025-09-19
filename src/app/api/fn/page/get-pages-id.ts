/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponse } from '../../models/page-response';

export interface GetPagesId$Params {
  id: number;
}

export function getPagesId(http: HttpClient, rootUrl: string, params: GetPagesId$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponse>> {
  const rb = new RequestBuilder(rootUrl, getPagesId.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponse>;
    })
  );
}

getPagesId.PATH = '/pages/{id}';
