/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UsersPermissionsUserRegistration } from '../../models/users-permissions-user-registration';

export interface AuthProviderCallbackGet$Params {

/**
 * Provider name
 */
  provider: string;
}

export function authProviderCallbackGet(http: HttpClient, rootUrl: string, params: AuthProviderCallbackGet$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersPermissionsUserRegistration>> {
  const rb = new RequestBuilder(rootUrl, authProviderCallbackGet.PATH, 'get');
  if (params) {
    rb.path('provider', params.provider, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UsersPermissionsUserRegistration>;
    })
  );
}

authProviderCallbackGet.PATH = '/auth/{provider}/callback';
