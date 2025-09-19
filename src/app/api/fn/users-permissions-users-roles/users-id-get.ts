/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersPermissionsUser } from '../../models/users-permissions-user';

export interface UsersIdGet$Params {

/**
 * user Id
 */
  id: string;
}

export function usersIdGet(http: HttpClient, rootUrl: string, params: UsersIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersPermissionsUser>> {
  const rb = new RequestBuilder(rootUrl, usersIdGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersPermissionsUser>;
    })
  );
}

usersIdGet.PATH = '/users/{id}';
