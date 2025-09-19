/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteReparaturbetriebsId } from '../fn/reparaturbetrieb/delete-reparaturbetriebs-id';
import { DeleteReparaturbetriebsId$Params } from '../fn/reparaturbetrieb/delete-reparaturbetriebs-id';
import { getReparaturbetriebs } from '../fn/reparaturbetrieb/get-reparaturbetriebs';
import { GetReparaturbetriebs$Params } from '../fn/reparaturbetrieb/get-reparaturbetriebs';
import { getReparaturbetriebsId } from '../fn/reparaturbetrieb/get-reparaturbetriebs-id';
import { GetReparaturbetriebsId$Params } from '../fn/reparaturbetrieb/get-reparaturbetriebs-id';
import { postReparaturbetriebs } from '../fn/reparaturbetrieb/post-reparaturbetriebs';
import { PostReparaturbetriebs$Params } from '../fn/reparaturbetrieb/post-reparaturbetriebs';
import { putReparaturbetriebsId } from '../fn/reparaturbetrieb/put-reparaturbetriebs-id';
import { PutReparaturbetriebsId$Params } from '../fn/reparaturbetrieb/put-reparaturbetriebs-id';
import { ReparaturbetriebListResponse } from '../models/reparaturbetrieb-list-response';
import { ReparaturbetriebResponse } from '../models/reparaturbetrieb-response';

@Injectable({ providedIn: 'root' })
export class ReparaturbetriebService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getReparaturbetriebs()` */
  static readonly GetReparaturbetriebsPath = '/reparaturbetriebs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReparaturbetriebs()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReparaturbetriebs$Response(params?: GetReparaturbetriebs$Params, context?: HttpContext): Observable<StrictHttpResponse<ReparaturbetriebListResponse>> {
    return getReparaturbetriebs(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReparaturbetriebs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReparaturbetriebs(params?: GetReparaturbetriebs$Params, context?: HttpContext): Observable<ReparaturbetriebListResponse> {
    return this.getReparaturbetriebs$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReparaturbetriebListResponse>): ReparaturbetriebListResponse => r.body)
    );
  }

  /** Path part for operation `postReparaturbetriebs()` */
  static readonly PostReparaturbetriebsPath = '/reparaturbetriebs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postReparaturbetriebs()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postReparaturbetriebs$Response(params: PostReparaturbetriebs$Params, context?: HttpContext): Observable<StrictHttpResponse<ReparaturbetriebResponse>> {
    return postReparaturbetriebs(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postReparaturbetriebs$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postReparaturbetriebs(params: PostReparaturbetriebs$Params, context?: HttpContext): Observable<ReparaturbetriebResponse> {
    return this.postReparaturbetriebs$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReparaturbetriebResponse>): ReparaturbetriebResponse => r.body)
    );
  }

  /** Path part for operation `getReparaturbetriebsId()` */
  static readonly GetReparaturbetriebsIdPath = '/reparaturbetriebs/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReparaturbetriebsId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReparaturbetriebsId$Response(params: GetReparaturbetriebsId$Params, context?: HttpContext): Observable<StrictHttpResponse<ReparaturbetriebResponse>> {
    return getReparaturbetriebsId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReparaturbetriebsId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReparaturbetriebsId(params: GetReparaturbetriebsId$Params, context?: HttpContext): Observable<ReparaturbetriebResponse> {
    return this.getReparaturbetriebsId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReparaturbetriebResponse>): ReparaturbetriebResponse => r.body)
    );
  }

  /** Path part for operation `putReparaturbetriebsId()` */
  static readonly PutReparaturbetriebsIdPath = '/reparaturbetriebs/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putReparaturbetriebsId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putReparaturbetriebsId$Response(params: PutReparaturbetriebsId$Params, context?: HttpContext): Observable<StrictHttpResponse<ReparaturbetriebResponse>> {
    return putReparaturbetriebsId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putReparaturbetriebsId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putReparaturbetriebsId(params: PutReparaturbetriebsId$Params, context?: HttpContext): Observable<ReparaturbetriebResponse> {
    return this.putReparaturbetriebsId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReparaturbetriebResponse>): ReparaturbetriebResponse => r.body)
    );
  }

  /** Path part for operation `deleteReparaturbetriebsId()` */
  static readonly DeleteReparaturbetriebsIdPath = '/reparaturbetriebs/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteReparaturbetriebsId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReparaturbetriebsId$Response(params: DeleteReparaturbetriebsId$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return deleteReparaturbetriebsId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteReparaturbetriebsId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReparaturbetriebsId(params: DeleteReparaturbetriebsId$Params, context?: HttpContext): Observable<number> {
    return this.deleteReparaturbetriebsId$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
