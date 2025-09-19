/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductMainCategoryRequest } from '../../models/product-main-category-request';
import { ProductMainCategoryResponse } from '../../models/product-main-category-response';

export interface PutProductMainCategoriesId$Params {
  id: number;
      body: ProductMainCategoryRequest
}

export function putProductMainCategoriesId(http: HttpClient, rootUrl: string, params: PutProductMainCategoriesId$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductMainCategoryResponse>> {
  const rb = new RequestBuilder(rootUrl, putProductMainCategoriesId.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
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

putProductMainCategoriesId.PATH = '/product-main-categories/{id}';
