/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deletePagesId } from '../fn/page/delete-pages-id';
import { DeletePagesId$Params } from '../fn/page/delete-pages-id';
import { getPages } from '../fn/page/get-pages';
import { GetPages$Params } from '../fn/page/get-pages';
import { getPagesId } from '../fn/page/get-pages-id';
import { GetPagesId$Params } from '../fn/page/get-pages-id';
import { PageListResponse } from '../models/page-list-response';
import { PageLocalizationResponse } from '../models/page-localization-response';
import { PageResponse } from '../models/page-response';
import { postPages } from '../fn/page/post-pages';
import { PostPages$Params } from '../fn/page/post-pages';
import { postPagesIdLocalizations } from '../fn/page/post-pages-id-localizations';
import { PostPagesIdLocalizations$Params } from '../fn/page/post-pages-id-localizations';
import { putPagesId } from '../fn/page/put-pages-id';
import { PutPagesId$Params } from '../fn/page/put-pages-id';

@Injectable({ providedIn: 'root' })
export class PageService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getPages()` */
  static readonly GetPagesPath = '/pages';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPages()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPages$Response(params?: GetPages$Params, context?: HttpContext): Observable<StrictHttpResponse<PageListResponse>> {
    return getPages(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPages$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPages(params?: GetPages$Params, context?: HttpContext): Observable<PageListResponse> {
    return this.getPages$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageListResponse>): PageListResponse => r.body)
    );
  }

  /** Path part for operation `postPages()` */
  static readonly PostPagesPath = '/pages';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postPages()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postPages$Response(params: PostPages$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponse>> {
    return postPages(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postPages$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postPages(params: PostPages$Params, context?: HttpContext): Observable<PageResponse> {
    return this.postPages$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponse>): PageResponse => r.body)
    );
  }

  /** Path part for operation `getPagesId()` */
  static readonly GetPagesIdPath = '/pages/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPagesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPagesId$Response(params: GetPagesId$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponse>> {
    return getPagesId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPagesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPagesId(params: GetPagesId$Params, context?: HttpContext): Observable<PageResponse> {
    return this.getPagesId$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponse>): PageResponse => r.body)
    );
  }

  /** Path part for operation `putPagesId()` */
  static readonly PutPagesIdPath = '/pages/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putPagesId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putPagesId$Response(params: PutPagesId$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponse>> {
    return putPagesId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putPagesId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putPagesId(params: PutPagesId$Params, context?: HttpContext): Observable<PageResponse> {
    return this.putPagesId$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponse>): PageResponse => r.body)
    );
  }

  /** Path part for operation `deletePagesId()` */
  static readonly DeletePagesIdPath = '/pages/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePagesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePagesId$Response(params: DeletePagesId$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return deletePagesId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePagesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePagesId(params: DeletePagesId$Params, context?: HttpContext): Observable<number> {
    return this.deletePagesId$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `postPagesIdLocalizations()` */
  static readonly PostPagesIdLocalizationsPath = '/pages/{id}/localizations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postPagesIdLocalizations()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postPagesIdLocalizations$Response(params: PostPagesIdLocalizations$Params, context?: HttpContext): Observable<StrictHttpResponse<PageLocalizationResponse>> {
    return postPagesIdLocalizations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postPagesIdLocalizations$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postPagesIdLocalizations(params: PostPagesIdLocalizations$Params, context?: HttpContext): Observable<PageLocalizationResponse> {
    return this.postPagesIdLocalizations$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageLocalizationResponse>): PageLocalizationResponse => r.body)
    );
  }

}
