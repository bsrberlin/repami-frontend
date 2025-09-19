/* tslint:disable */
/* eslint-disable */
import { PageListResponseDataItem } from '../models/page-list-response-data-item';
export interface PageListResponse {
  data?: Array<PageListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
