/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersPermissionsPermissionsTree } from '../../models/users-permissions-permissions-tree';

export interface UsersPermissionsPermissionsGet$Params {
}

export function usersPermissionsPermissionsGet(http: HttpClient, rootUrl: string, params?: UsersPermissionsPermissionsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'permissions'?: UsersPermissionsPermissionsTree;
}>> {
  const rb = new RequestBuilder(rootUrl, usersPermissionsPermissionsGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      'permissions'?: UsersPermissionsPermissionsTree;
      }>;
    })
  );
}

usersPermissionsPermissionsGet.PATH = '/users-permissions/permissions';
