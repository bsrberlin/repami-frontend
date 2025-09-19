/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageListResponse } from '../../models/page-list-response';

export interface GetPages$Params {

/**
 * Sort by attributes ascending (asc) or descending (desc)
 */
  sort?: string;

/**
 * Return page/pageSize (default: true)
 */
  'pagination[withCount]'?: boolean;

/**
 * Page number (default: 0)
 */
  'pagination[page]'?: number;

/**
 * Page size (default: 25)
 */
  'pagination[pageSize]'?: number;

/**
 * Offset value (default: 0)
 */
  'pagination[start]'?: number;

/**
 * Number of entities to return (default: 25)
 */
  'pagination[limit]'?: number;

/**
 * Fields to return (ex: title,author)
 */
  fields?: string;

/**
 * Relations to return
 */
  populate?: string;

/**
 * Filters to apply
 */
  filters?: {
};

/**
 * Locale to apply
 */
  locale?: string;
}

export function getPages(http: HttpClient, rootUrl: string, params?: GetPages$Params, context?: HttpContext): Observable<StrictHttpResponse<PageListResponse>> {
  const rb = new RequestBuilder(rootUrl, getPages.PATH, 'get');
  if (params) {
    rb.query('sort', params.sort, {});
    rb.query('pagination[withCount]', params['pagination[withCount]'], {});
    rb.query('pagination[page]', params['pagination[page]'], {});
    rb.query('pagination[pageSize]', params['pagination[pageSize]'], {});
    rb.query('pagination[start]', params['pagination[start]'], {});
    rb.query('pagination[limit]', params['pagination[limit]'], {});
    rb.query('fields', params.fields, {});
    rb.query('populate', params.populate, {});
    rb.query('filters', params.filters, {"style":"deepObject"});
    rb.query('locale', params.locale, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageListResponse>;
    })
  );
}

getPages.PATH = '/pages';
