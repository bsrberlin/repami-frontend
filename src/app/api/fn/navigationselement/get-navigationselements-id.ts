/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NavigationselementResponse } from '../../models/navigationselement-response';

export interface GetNavigationselementsId$Params {
  id: number;
}

export function getNavigationselementsId(http: HttpClient, rootUrl: string, params: GetNavigationselementsId$Params, context?: HttpContext): Observable<StrictHttpResponse<NavigationselementResponse>> {
  const rb = new RequestBuilder(rootUrl, getNavigationselementsId.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<NavigationselementResponse>;
    })
  );
}

getNavigationselementsId.PATH = '/navigationselements/{id}';
