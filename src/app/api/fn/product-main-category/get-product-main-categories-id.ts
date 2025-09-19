/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProductMainCategoryResponse } from '../../models/product-main-category-response';

export interface GetProductMainCategoriesId$Params {
  id: number;
}

export function getProductMainCategoriesId(http: HttpClient, rootUrl: string, params: GetProductMainCategoriesId$Params, context?: HttpContext): Observable<StrictHttpResponse<ProductMainCategoryResponse>> {
  const rb = new RequestBuilder(rootUrl, getProductMainCategoriesId.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getProductMainCategoriesId.PATH = '/product-main-categories/{id}';
