/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteProductCategoriesId } from '../fn/product-category/delete-product-categories-id';
import { DeleteProductCategoriesId$Params } from '../fn/product-category/delete-product-categories-id';
import { getProductCategories } from '../fn/product-category/get-product-categories';
import { GetProductCategories$Params } from '../fn/product-category/get-product-categories';
import { getProductCategoriesId } from '../fn/product-category/get-product-categories-id';
import { GetProductCategoriesId$Params } from '../fn/product-category/get-product-categories-id';
import { postProductCategories } from '../fn/product-category/post-product-categories';
import { PostProductCategories$Params } from '../fn/product-category/post-product-categories';
import { ProductCategoryListResponse } from '../models/product-category-list-response';
import { ProductCategoryResponse } from '../models/product-category-response';
import { putProductCategoriesId } from '../fn/product-category/put-product-categories-id';
import { PutProductCategoriesId$Params } from '../fn/product-category/put-product-categories-id';

@Injectable({ providedIn: 'root' })
export class ProductCategoryService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getProductCategories()` */
  static readonly GetProductCategoriesPath = '/product-categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductCategories$Response(params?: GetProductCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategoryListResponse>> {
    return getProductCategories(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductCategories(params?: GetProductCategories$Params, context?: HttpContext): Observable<ProductCategoryListResponse> {
    return this.getProductCategories$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductCategoryListResponse>): ProductCategoryListResponse => r.body)
    );
  }

  /** Path part for operation `postProductCategories()` */
  static readonly PostProductCategoriesPath = '/product-categories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postProductCategories()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postProductCategories$Response(params: PostProductCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategoryResponse>> {
    return postProductCategories(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postProductCategories$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postProductCategories(params: PostProductCategories$Params, context?: HttpContext): Observable<ProductCategoryResponse> {
    return this.postProductCategories$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductCategoryResponse>): ProductCategoryResponse => r.body)
    );
  }

  /** Path part for operation `getProductCategoriesId()` */
  static readonly GetProductCategoriesIdPath = '/product-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductCategoriesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductCategoriesId$Response(params: GetProductCategoriesId$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategoryResponse>> {
    return getProductCategoriesId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductCategoriesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductCategoriesId(params: GetProductCategoriesId$Params, context?: HttpContext): Observable<ProductCategoryResponse> {
    return this.getProductCategoriesId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductCategoryResponse>): ProductCategoryResponse => r.body)
    );
  }

  /** Path part for operation `putProductCategoriesId()` */
  static readonly PutProductCategoriesIdPath = '/product-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putProductCategoriesId()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putProductCategoriesId$Response(params: PutProductCategoriesId$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategoryResponse>> {
    return putProductCategoriesId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putProductCategoriesId$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putProductCategoriesId(params: PutProductCategoriesId$Params, context?: HttpContext): Observable<ProductCategoryResponse> {
    return this.putProductCategoriesId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ProductCategoryResponse>): ProductCategoryResponse => r.body)
    );
  }

  /** Path part for operation `deleteProductCategoriesId()` */
  static readonly DeleteProductCategoriesIdPath = '/product-categories/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProductCategoriesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProductCategoriesId$Response(params: DeleteProductCategoriesId$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return deleteProductCategoriesId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteProductCategoriesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProductCategoriesId(params: DeleteProductCategoriesId$Params, context?: HttpContext): Observable<number> {
    return this.deleteProductCategoriesId$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
