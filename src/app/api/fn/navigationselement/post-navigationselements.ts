/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { NavigationselementRequest } from '../../models/navigationselement-request';
import { NavigationselementResponse } from '../../models/navigationselement-response';

export interface PostNavigationselements$Params {
      body: NavigationselementRequest
}

export function postNavigationselements(http: HttpClient, rootUrl: string, params: PostNavigationselements$Params, context?: HttpContext): Observable<StrictHttpResponse<NavigationselementResponse>> {
  const rb = new RequestBuilder(rootUrl, postNavigationselements.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

postNavigationselements.PATH = '/navigationselements';
