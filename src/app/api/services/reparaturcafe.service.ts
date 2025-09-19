/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteReparaturcafesId } from '../fn/reparaturcafe/delete-reparaturcafes-id';
import { DeleteReparaturcafesId$Params } from '../fn/reparaturcafe/delete-reparaturcafes-id';
import { getReparaturcafes } from '../fn/reparaturcafe/get-reparaturcafes';
import { GetReparaturcafes$Params } from '../fn/reparaturcafe/get-reparaturcafes';
import { getReparaturcafesId } from '../fn/reparaturcafe/get-reparaturcafes-id';
import { GetReparaturcafesId$Params } from '../fn/reparaturcafe/get-reparaturcafes-id';
import { postReparaturcafes } from '../fn/reparaturcafe/post-reparaturcafes';
import { PostReparaturcafes$Params } from '../fn/reparaturcafe/post-reparaturcafes';
import { putReparaturcafesId } from '../fn/reparaturcafe/put-reparaturcafes-id';
import { PutReparaturcafesId$Params } from '../fn/reparaturcafe/put-reparaturcafes-id';
import { ReparaturcafeListResponse } from '../models/reparaturcafe-list-response';
import { ReparaturcafeResponse } from '../models/reparaturcafe-response';

@Injectable({ providedIn: 'root' })
export class ReparaturcafeService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getReparaturcafes()` */
  static readonly GetReparaturcafesPath = '/reparaturcafes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReparaturcafes()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReparaturcafes$Response(params?: GetReparaturcafes$Params, context?: HttpContext): Observable<StrictHttpResponse<ReparaturcafeListResponse>> {
    return getReparaturcafes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReparaturcafes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReparaturcafes(params?: GetReparaturcafes$Params, context?: HttpContext): Observable<ReparaturcafeListResponse> {
    return this.getReparaturcafes$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReparaturcafeListResponse>): ReparaturcafeListResponse => r.body)
    );
  }

  /** Path part for operation `postReparaturcafes()` */
  static readonly PostReparaturcafesPath = '/reparaturcafes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postReparaturcafes()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postReparaturcafes$Response(params: PostReparaturcafes$Params, context?: HttpContext): Observable<StrictHttpResponse<ReparaturcafeResponse>> {
    return postReparaturcafes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postReparaturcafes$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postReparaturcafes(params: PostReparaturcafes$Params, context?: HttpContext): Observable<ReparaturcafeResponse> {
    return this.postReparaturcafes$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReparaturcafeResponse>): ReparaturcafeResponse => r.body)
    );
  }

  /** Path part for operation `getReparaturcafesId()` */
  static readonly GetReparaturcafesIdPath = '/reparaturcafes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getReparaturcafesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReparaturcafesId$Response(params: GetReparaturcafesId$Params, context?: HttpContext): Observable<StrictHttpResponse<ReparaturcafeResponse>> {
    return getReparaturcafesId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getReparaturcafesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getReparaturcafesId(params: GetReparaturcafesId$Params, context?: HttpContext): Observable<ReparaturcafeResponse> {
    return this.getReparaturcafesId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReparaturcafeResponse>): ReparaturcafeResponse => r.body)
    );
  }

  /** Path part for operation `putReparaturcafesId()` */
  static readonly PutReparaturcafesIdPath = '/reparaturcafes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putReparaturcafesId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putReparaturcafesId$Response(params: PutReparaturcafesId$Params, context?: HttpContext): Observable<StrictHttpResponse<ReparaturcafeResponse>> {
    return putReparaturcafesId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putReparaturcafesId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putReparaturcafesId(params: PutReparaturcafesId$Params, context?: HttpContext): Observable<ReparaturcafeResponse> {
    return this.putReparaturcafesId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ReparaturcafeResponse>): ReparaturcafeResponse => r.body)
    );
  }

  /** Path part for operation `deleteReparaturcafesId()` */
  static readonly DeleteReparaturcafesIdPath = '/reparaturcafes/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteReparaturcafesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReparaturcafesId$Response(params: DeleteReparaturcafesId$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return deleteReparaturcafesId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteReparaturcafesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteReparaturcafesId(params: DeleteReparaturcafesId$Params, context?: HttpContext): Observable<number> {
    return this.deleteReparaturcafesId$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
