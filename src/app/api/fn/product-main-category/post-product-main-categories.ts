/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductMainCategoryRequest } from '../../models/product-main-category-request';
import { ProductMainCategoryResponse } from '../../models/product-main-category-response';

export interface PostProductMainCategories$Params {
      body: ProductMainCategoryRequest
}

export function postProductMainCategories(http: HttpClient, rootUrl: string, params: PostProductMainCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductMainCategoryResponse>> {
  const rb = new RequestBuilder(rootUrl, postProductMainCategories.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductMainCategoryResponse>;
    })
  );
}

postProductMainCategories.PATH = '/product-main-categories';
