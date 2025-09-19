/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteLanguagesId } from '../fn/language/delete-languages-id';
import { DeleteLanguagesId$Params } from '../fn/language/delete-languages-id';
import { getLanguages } from '../fn/language/get-languages';
import { GetLanguages$Params } from '../fn/language/get-languages';
import { getLanguagesId } from '../fn/language/get-languages-id';
import { GetLanguagesId$Params } from '../fn/language/get-languages-id';
import { LanguageListResponse } from '../models/language-list-response';
import { LanguageResponse } from '../models/language-response';
import { postLanguages } from '../fn/language/post-languages';
import { PostLanguages$Params } from '../fn/language/post-languages';
import { putLanguagesId } from '../fn/language/put-languages-id';
import { PutLanguagesId$Params } from '../fn/language/put-languages-id';

@Injectable({ providedIn: 'root' })
export class LanguageService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getLanguages()` */
  static readonly GetLanguagesPath = '/languages';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLanguages()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLanguages$Response(params?: GetLanguages$Params, context?: HttpContext): Observable<StrictHttpResponse<LanguageListResponse>> {
    return getLanguages(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLanguages$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLanguages(params?: GetLanguages$Params, context?: HttpContext): Observable<LanguageListResponse> {
    return this.getLanguages$Response(params, context).pipe(
      map((r: StrictHttpResponse<LanguageListResponse>): LanguageListResponse => r.body)
    );
  }

  /** Path part for operation `postLanguages()` */
  static readonly PostLanguagesPath = '/languages';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postLanguages()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postLanguages$Response(params: PostLanguages$Params, context?: HttpContext): Observable<StrictHttpResponse<LanguageResponse>> {
    return postLanguages(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postLanguages$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postLanguages(params: PostLanguages$Params, context?: HttpContext): Observable<LanguageResponse> {
    return this.postLanguages$Response(params, context).pipe(
      map((r: StrictHttpResponse<LanguageResponse>): LanguageResponse => r.body)
    );
  }

  /** Path part for operation `getLanguagesId()` */
  static readonly GetLanguagesIdPath = '/languages/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLanguagesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLanguagesId$Response(params: GetLanguagesId$Params, context?: HttpContext): Observable<StrictHttpResponse<LanguageResponse>> {
    return getLanguagesId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLanguagesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLanguagesId(params: GetLanguagesId$Params, context?: HttpContext): Observable<LanguageResponse> {
    return this.getLanguagesId$Response(params, context).pipe(
      map((r: StrictHttpResponse<LanguageResponse>): LanguageResponse => r.body)
    );
  }

  /** Path part for operation `putLanguagesId()` */
  static readonly PutLanguagesIdPath = '/languages/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putLanguagesId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putLanguagesId$Response(params: PutLanguagesId$Params, context?: HttpContext): Observable<StrictHttpResponse<LanguageResponse>> {
    return putLanguagesId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putLanguagesId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putLanguagesId(params: PutLanguagesId$Params, context?: HttpContext): Observable<LanguageResponse> {
    return this.putLanguagesId$Response(params, context).pipe(
      map((r: StrictHttpResponse<LanguageResponse>): LanguageResponse => r.body)
    );
  }

  /** Path part for operation `deleteLanguagesId()` */
  static readonly DeleteLanguagesIdPath = '/languages/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteLanguagesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLanguagesId$Response(params: DeleteLanguagesId$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return deleteLanguagesId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteLanguagesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLanguagesId(params: DeleteLanguagesId$Params, context?: HttpContext): Observable<number> {
    return this.deleteLanguagesId$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
