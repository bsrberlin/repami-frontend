/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProfileRequest } from '../../models/profile-request';
import { ProfileResponse } from '../../models/profile-response';

export interface PutProfilesId$Params {
  id: number;
      body: ProfileRequest
}

export function putProfilesId(http: HttpClient, rootUrl: string, params: PutProfilesId$Params, context?: HttpContext): Observable<StrictHttpResponse<ProfileResponse>> {
  const rb = new RequestBuilder(rootUrl, putProfilesId.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProfileResponse>;
    })
  );
}

putProfilesId.PATH = '/profiles/{id}';
