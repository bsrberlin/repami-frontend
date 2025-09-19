/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Error } from '../../models/error';

export interface AuthEmailConfirmationGet$Params {

/**
 * confirmation token received by email
 */
  confirmation?: string;
}

export function authEmailConfirmationGet(http: HttpClient, rootUrl: string, params?: AuthEmailConfirmationGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Error>> {
  const rb = new RequestBuilder(rootUrl, authEmailConfirmationGet.PATH, 'get');
  if (params) {
    rb.query('confirmation', params.confirmation, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Error>;
    })
  );
}

authEmailConfirmationGet.PATH = '/auth/email-confirmation';
