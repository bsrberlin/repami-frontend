/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersPermissionsPermissionsTree } from '../../models/users-permissions-permissions-tree';

export interface UsersPermissionsRolesPost$Params {
      body: {
'name'?: string;
'description'?: string;
'type'?: string;
'permissions'?: UsersPermissionsPermissionsTree;
}
}

export function usersPermissionsRolesPost(http: HttpClient, rootUrl: string, params: UsersPermissionsRolesPost$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'ok'?: 'true';
}>> {
  const rb = new RequestBuilder(rootUrl, usersPermissionsRolesPost.PATH, 'post');
  if (params) {
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

usersPermissionsRolesPost.PATH = '/users-permissions/roles';
