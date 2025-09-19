/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TestResponse } from '../../models/test-response';

export interface GetTestsId$Params {
  id: number;
}

export function getTestsId(http: HttpClient, rootUrl: string, params: GetTestsId$Params, context?: HttpContext): Observable<StrictHttpResponse<TestResponse>> {
  const rb = new RequestBuilder(rootUrl, getTestsId.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TestResponse>;
    })
  );
}

getTestsId.PATH = '/tests/{id}';
