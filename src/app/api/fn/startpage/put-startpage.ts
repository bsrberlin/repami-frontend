/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StartpageRequest } from '../../models/startpage-request';
import { StartpageResponse } from '../../models/startpage-response';

export interface PutStartpage$Params {
      body: StartpageRequest
}

export function putStartpage(http: HttpClient, rootUrl: string, params: PutStartpage$Params, context?: HttpContext): Observable<StrictHttpResponse<StartpageResponse>> {
  const rb = new RequestBuilder(rootUrl, putStartpage.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StartpageResponse>;
    })
  );
}

putStartpage.PATH = '/startpage';
