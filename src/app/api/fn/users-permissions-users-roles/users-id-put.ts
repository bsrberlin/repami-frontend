/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersPermissionsRole } from '../../models/users-permissions-role';
import { UsersPermissionsUser } from '../../models/users-permissions-user';

export interface UsersIdPut$Params {

/**
 * user Id
 */
  id: string;
      body: {
'email': string;
'username': string;
'password': string;
}
}

export function usersIdPut(http: HttpClient, rootUrl: string, params: UsersIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersPermissionsUser & {
'role'?: UsersPermissionsRole;
}>> {
  const rb = new RequestBuilder(rootUrl, usersIdPut.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersPermissionsUser & {
      'role'?: UsersPermissionsRole;
      }>;
    })
  );
}

usersIdPut.PATH = '/users/{id}';
