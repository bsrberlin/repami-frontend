/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersPermissionsRole } from '../../models/users-permissions-role';

export interface UsersPermissionsRolesGet$Params {
}

export function usersPermissionsRolesGet(http: HttpClient, rootUrl: string, params?: UsersPermissionsRolesGet$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'roles'?: Array<UsersPermissionsRole & {
'nb_users'?: number;
}>;
}>> {
  const rb = new RequestBuilder(rootUrl, usersPermissionsRolesGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      'roles'?: Array<UsersPermissionsRole & {
      'nb_users'?: number;
      }>;
      }>;
    })
  );
}

usersPermissionsRolesGet.PATH = '/users-permissions/roles';
