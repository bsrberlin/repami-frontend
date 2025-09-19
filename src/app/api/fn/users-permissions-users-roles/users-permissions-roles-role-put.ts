/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersPermissionsPermissionsTree } from '../../models/users-permissions-permissions-tree';

export interface UsersPermissionsRolesRolePut$Params {

/**
 * role Id
 */
  role: string;
      body: {
'name'?: string;
'description'?: string;
'type'?: string;
'permissions'?: UsersPermissionsPermissionsTree;
}
}

export function usersPermissionsRolesRolePut(http: HttpClient, rootUrl: string, params: UsersPermissionsRolesRolePut$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'ok'?: 'true';
}>> {
  const rb = new RequestBuilder(rootUrl, usersPermissionsRolesRolePut.PATH, 'put');
  if (params) {
    rb.path('role', params.role, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      'ok'?: 'true';
      }>;
    })
  );
}

usersPermissionsRolesRolePut.PATH = '/users-permissions/roles/{role}';
