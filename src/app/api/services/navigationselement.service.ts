/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteNavigationselementsId } from '../fn/navigationselement/delete-navigationselements-id';
import { DeleteNavigationselementsId$Params } from '../fn/navigationselement/delete-navigationselements-id';
import { getNavigationselements } from '../fn/navigationselement/get-navigationselements';
import { GetNavigationselements$Params } from '../fn/navigationselement/get-navigationselements';
import { getNavigationselementsId } from '../fn/navigationselement/get-navigationselements-id';
import { GetNavigationselementsId$Params } from '../fn/navigationselement/get-navigationselements-id';
import { NavigationselementListResponse } from '../models/navigationselement-list-response';
import { NavigationselementLocalizationResponse } from '../models/navigationselement-localization-response';
import { NavigationselementResponse } from '../models/navigationselement-response';
import { postNavigationselements } from '../fn/navigationselement/post-navigationselements';
import { PostNavigationselements$Params } from '../fn/navigationselement/post-navigationselements';
import { postNavigationselementsIdLocalizations } from '../fn/navigationselement/post-navigationselements-id-localizations';
import { PostNavigationselementsIdLocalizations$Params } from '../fn/navigationselement/post-navigationselements-id-localizations';
import { putNavigationselementsId } from '../fn/navigationselement/put-navigationselements-id';
import { PutNavigationselementsId$Params } from '../fn/navigationselement/put-navigationselements-id';

@Injectable({ providedIn: 'root' })
export class NavigationselementService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getNavigationselements()` */
  static readonly GetNavigationselementsPath = '/navigationselements';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getNavigationselements()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNavigationselements$Response(params?: GetNavigationselements$Params, context?: HttpContext): Observable<StrictHttpResponse<NavigationselementListResponse>> {
    return getNavigationselements(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getNavigationselements$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNavigationselements(params?: GetNavigationselements$Params, context?: HttpContext): Observable<NavigationselementListResponse> {
    return this.getNavigationselements$Response(params, context).pipe(
      map((r: StrictHttpResponse<NavigationselementListResponse>): NavigationselementListResponse => r.body)
    );
  }

  /** Path part for operation `postNavigationselements()` */
  static readonly PostNavigationselementsPath = '/navigationselements';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postNavigationselements()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postNavigationselements$Response(params: PostNavigationselements$Params, context?: HttpContext): Observable<StrictHttpResponse<NavigationselementResponse>> {
    return postNavigationselements(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postNavigationselements$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postNavigationselements(params: PostNavigationselements$Params, context?: HttpContext): Observable<NavigationselementResponse> {
    return this.postNavigationselements$Response(params, context).pipe(
      map((r: StrictHttpResponse<NavigationselementResponse>): NavigationselementResponse => r.body)
    );
  }

  /** Path part for operation `getNavigationselementsId()` */
  static readonly GetNavigationselementsIdPath = '/navigationselements/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getNavigationselementsId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNavigationselementsId$Response(params: GetNavigationselementsId$Params, context?: HttpContext): Observable<StrictHttpResponse<NavigationselementResponse>> {
    return getNavigationselementsId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getNavigationselementsId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNavigationselementsId(params: GetNavigationselementsId$Params, context?: HttpContext): Observable<NavigationselementResponse> {
    return this.getNavigationselementsId$Response(params, context).pipe(
      map((r: StrictHttpResponse<NavigationselementResponse>): NavigationselementResponse => r.body)
    );
  }

  /** Path part for operation `putNavigationselementsId()` */
  static readonly PutNavigationselementsIdPath = '/navigationselements/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putNavigationselementsId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putNavigationselementsId$Response(params: PutNavigationselementsId$Params, context?: HttpContext): Observable<StrictHttpResponse<NavigationselementResponse>> {
    return putNavigationselementsId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putNavigationselementsId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putNavigationselementsId(params: PutNavigationselementsId$Params, context?: HttpContext): Observable<NavigationselementResponse> {
    return this.putNavigationselementsId$Response(params, context).pipe(
      map((r: StrictHttpResponse<NavigationselementResponse>): NavigationselementResponse => r.body)
    );
  }

  /** Path part for operation `deleteNavigationselementsId()` */
  static readonly DeleteNavigationselementsIdPath = '/navigationselements/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteNavigationselementsId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteNavigationselementsId$Response(params: DeleteNavigationselementsId$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return deleteNavigationselementsId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteNavigationselementsId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteNavigationselementsId(params: DeleteNavigationselementsId$Params, context?: HttpContext): Observable<number> {
    return this.deleteNavigationselementsId$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `postNavigationselementsIdLocalizations()` */
  static readonly PostNavigationselementsIdLocalizationsPath = '/navigationselements/{id}/localizations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postNavigationselementsIdLocalizations()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postNavigationselementsIdLocalizations$Response(params: PostNavigationselementsIdLocalizations$Params, context?: HttpContext): Observable<StrictHttpResponse<NavigationselementLocalizationResponse>> {
    return postNavigationselementsIdLocalizations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postNavigationselementsIdLocalizations$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postNavigationselementsIdLocalizations(params: PostNavigationselementsIdLocalizations$Params, context?: HttpContext): Observable<NavigationselementLocalizationResponse> {
    return this.postNavigationselementsIdLocalizations$Response(params, context).pipe(
      map((r: StrictHttpResponse<NavigationselementLocalizationResponse>): NavigationselementLocalizationResponse => r.body)
    );
  }

}
