/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersPermissionsUser } from '../../models/users-permissions-user';

export interface UsersMeGet$Params {
}

export function usersMeGet(http: HttpClient, rootUrl: string, params?: UsersMeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersPermissionsUser>> {
  const rb = new RequestBuilder(rootUrl, usersMeGet.PATH, 'get');
  if (params) {
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

usersMeGet.PATH = '/users/me';
