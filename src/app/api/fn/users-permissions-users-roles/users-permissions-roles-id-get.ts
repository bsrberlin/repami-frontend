/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersPermissionsRole } from '../../models/users-permissions-role';

export interface UsersPermissionsRolesIdGet$Params {

/**
 * role Id
 */
  id: string;
}

export function usersPermissionsRolesIdGet(http: HttpClient, rootUrl: string, params: UsersPermissionsRolesIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'role'?: UsersPermissionsRole;
}>> {
  const rb = new RequestBuilder(rootUrl, usersPermissionsRolesIdGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      'role'?: UsersPermissionsRole;
      }>;
    })
  );
}

usersPermissionsRolesIdGet.PATH = '/users-permissions/roles/{id}';
