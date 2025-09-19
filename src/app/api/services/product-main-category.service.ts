/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteProductMainCategoriesId } from '../fn/product-main-category/delete-product-main-categories-id';
import { DeleteProductMainCategoriesId$Params } from '../fn/product-main-category/delete-product-main-categories-id';
import { getProductMainCategories } from '../fn/product-main-category/get-product-main-categories';
import { GetProductMainCategories$Params } from '../fn/product-main-category/get-product-main-categories';
import { getProductMainCategoriesId } from '../fn/product-main-category/get-product-main-categories-id';
import { GetProductMainCategoriesId$Params } from '../fn/product-main-category/get-product-main-categories-id';
import { postProductMainCategories } from '../fn/product-main-category/post-product-main-categories';
import { PostProductMainCategories$Params } from '../fn/product-main-category/post-product-main-categories';
import { ProductMainCategoryListResponse } from '../models/product-main-category-list-response';
import { ProductMainCategoryResponse } from '../models/product-main-category-response';
import { putProductMainCategoriesId } from '../fn/product-main-category/put-product-main-categories-id';
import { PutProductMainCategoriesId$Params } from '../fn/product-main-category/put-product-main-categories-id';

@Injectable({ providedIn: 'root' })
export class ProductMainCategoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getProductMainCategories()` */
  static readonly GetProductMainCategoriesPath = '/product-main-categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductMainCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductMainCategories$Response(params?: GetProductMainCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductMainCategoryListResponse>> {
    return getProductMainCategories(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductMainCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductMainCategories(params?: GetProductMainCategories$Params, context?: HttpContext): Observable<ProductMainCategoryListResponse> {
    return this.getProductMainCategories$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductMainCategoryListResponse>): ProductMainCategoryListResponse => r.body)
    );
  }

  /** Path part for operation `postProductMainCategories()` */
  static readonly PostProductMainCategoriesPath = '/product-main-categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postProductMainCategories()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postProductMainCategories$Response(params: PostProductMainCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductMainCategoryResponse>> {
    return postProductMainCategories(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postProductMainCategories$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postProductMainCategories(params: PostProductMainCategories$Params, context?: HttpContext): Observable<ProductMainCategoryResponse> {
    return this.postProductMainCategories$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductMainCategoryResponse>): ProductMainCategoryResponse => r.body)
    );
  }

  /** Path part for operation `getProductMainCategoriesId()` */
  static readonly GetProductMainCategoriesIdPath = '/product-main-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductMainCategoriesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductMainCategoriesId$Response(params: GetProductMainCategoriesId$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductMainCategoryResponse>> {
    return getProductMainCategoriesId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductMainCategoriesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductMainCategoriesId(params: GetProductMainCategoriesId$Params, context?: HttpContext): Observable<ProductMainCategoryResponse> {
    return this.getProductMainCategoriesId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductMainCategoryResponse>): ProductMainCategoryResponse => r.body)
    );
  }

  /** Path part for operation `putProductMainCategoriesId()` */
  static readonly PutProductMainCategoriesIdPath = '/product-main-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putProductMainCategoriesId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putProductMainCategoriesId$Response(params: PutProductMainCategoriesId$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductMainCategoryResponse>> {
    return putProductMainCategoriesId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putProductMainCategoriesId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putProductMainCategoriesId(params: PutProductMainCategoriesId$Params, context?: HttpContext): Observable<ProductMainCategoryResponse> {
    return this.putProductMainCategoriesId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductMainCategoryResponse>): ProductMainCategoryResponse => r.body)
    );
  }

  /** Path part for operation `deleteProductMainCategoriesId()` */
  static readonly DeleteProductMainCategoriesIdPath = '/product-main-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProductMainCategoriesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProductMainCategoriesId$Response(params: DeleteProductMainCategoriesId$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return deleteProductMainCategoriesId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteProductMainCategoriesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProductMainCategoriesId(params: DeleteProductMainCategoriesId$Params, context?: HttpContext): Observable<number> {
    return this.deleteProductMainCategoriesId$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
