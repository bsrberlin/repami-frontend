/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteStartseitesId } from '../fn/startseite/delete-startseites-id';
import { DeleteStartseitesId$Params } from '../fn/startseite/delete-startseites-id';
import { getStartseites } from '../fn/startseite/get-startseites';
import { GetStartseites$Params } from '../fn/startseite/get-startseites';
import { getStartseitesId } from '../fn/startseite/get-startseites-id';
import { GetStartseitesId$Params } from '../fn/startseite/get-startseites-id';
import { postStartseites } from '../fn/startseite/post-startseites';
import { PostStartseites$Params } from '../fn/startseite/post-startseites';
import { postStartseitesIdLocalizations } from '../fn/startseite/post-startseites-id-localizations';
import { PostStartseitesIdLocalizations$Params } from '../fn/startseite/post-startseites-id-localizations';
import { putStartseitesId } from '../fn/startseite/put-startseites-id';
import { PutStartseitesId$Params } from '../fn/startseite/put-startseites-id';
import { StartseiteListResponse } from '../models/startseite-list-response';
import { StartseiteLocalizationResponse } from '../models/startseite-localization-response';
import { StartseiteResponse } from '../models/startseite-response';

@Injectable({ providedIn: 'root' })
export class StartseiteService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getStartseites()` */
  static readonly GetStartseitesPath = '/startseites';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStartseites()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStartseites$Response(params?: GetStartseites$Params, context?: HttpContext): Observable<StrictHttpResponse<StartseiteListResponse>> {
    return getStartseites(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStartseites$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStartseites(params?: GetStartseites$Params, context?: HttpContext): Observable<StartseiteListResponse> {
    return this.getStartseites$Response(params, context).pipe(
      map((r: StrictHttpResponse<StartseiteListResponse>): StartseiteListResponse => r.body)
    );
  }

  /** Path part for operation `postStartseites()` */
  static readonly PostStartseitesPath = '/startseites';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postStartseites()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postStartseites$Response(params: PostStartseites$Params, context?: HttpContext): Observable<StrictHttpResponse<StartseiteResponse>> {
    return postStartseites(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postStartseites$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postStartseites(params: PostStartseites$Params, context?: HttpContext): Observable<StartseiteResponse> {
    return this.postStartseites$Response(params, context).pipe(
      map((r: StrictHttpResponse<StartseiteResponse>): StartseiteResponse => r.body)
    );
  }

  /** Path part for operation `getStartseitesId()` */
  static readonly GetStartseitesIdPath = '/startseites/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStartseitesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStartseitesId$Response(params: GetStartseitesId$Params, context?: HttpContext): Observable<StrictHttpResponse<StartseiteResponse>> {
    return getStartseitesId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStartseitesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStartseitesId(params: GetStartseitesId$Params, context?: HttpContext): Observable<StartseiteResponse> {
    return this.getStartseitesId$Response(params, context).pipe(
      map((r: StrictHttpResponse<StartseiteResponse>): StartseiteResponse => r.body)
    );
  }

  /** Path part for operation `putStartseitesId()` */
  static readonly PutStartseitesIdPath = '/startseites/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putStartseitesId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putStartseitesId$Response(params: PutStartseitesId$Params, context?: HttpContext): Observable<StrictHttpResponse<StartseiteResponse>> {
    return putStartseitesId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putStartseitesId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putStartseitesId(params: PutStartseitesId$Params, context?: HttpContext): Observable<StartseiteResponse> {
    return this.putStartseitesId$Response(params, context).pipe(
      map((r: StrictHttpResponse<StartseiteResponse>): StartseiteResponse => r.body)
    );
  }

  /** Path part for operation `deleteStartseitesId()` */
  static readonly DeleteStartseitesIdPath = '/startseites/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteStartseitesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteStartseitesId$Response(params: DeleteStartseitesId$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return deleteStartseitesId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteStartseitesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteStartseitesId(params: DeleteStartseitesId$Params, context?: HttpContext): Observable<number> {
    return this.deleteStartseitesId$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `postStartseitesIdLocalizations()` */
  static readonly PostStartseitesIdLocalizationsPath = '/startseites/{id}/localizations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postStartseitesIdLocalizations()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postStartseitesIdLocalizations$Response(params: PostStartseitesIdLocalizations$Params, context?: HttpContext): Observable<StrictHttpResponse<StartseiteLocalizationResponse>> {
    return postStartseitesIdLocalizations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postStartseitesIdLocalizations$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postStartseitesIdLocalizations(params: PostStartseitesIdLocalizations$Params, context?: HttpContext): Observable<StartseiteLocalizationResponse> {
    return this.postStartseitesIdLocalizations$Response(params, context).pipe(
      map((r: StrictHttpResponse<StartseiteLocalizationResponse>): StartseiteLocalizationResponse => r.body)
    );
  }

}
