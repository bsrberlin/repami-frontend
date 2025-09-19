/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Error } from '../../models/error';

export interface ConnectProviderGet$Params {

/**
 * Provider name
 */
  provider: string;
}

export function connectProviderGet(http: HttpClient, rootUrl: string, params: ConnectProviderGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Error>> {
  const rb = new RequestBuilder(rootUrl, connectProviderGet.PATH, 'get');
  if (params) {
    rb.path('provider', params.provider, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Error>;
    })
  );
}

connectProviderGet.PATH = '/connect/{provider}';
