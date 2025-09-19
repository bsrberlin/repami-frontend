/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductCategoryRequest } from '../../models/product-category-request';
import { ProductCategoryResponse } from '../../models/product-category-response';

export interface PutProductCategoriesId$Params {
  id: number;
      body: ProductCategoryRequest
}

export function putProductCategoriesId(http: HttpClient, rootUrl: string, params: PutProductCategoriesId$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductCategoryResponse>> {
  const rb = new RequestBuilder(rootUrl, putProductCategoriesId.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProductCategoryResponse>;
    })
  );
}

putProductCategoriesId.PATH = '/product-categories/{id}';
