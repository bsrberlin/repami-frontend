/* tslint:disable */
/* eslint-disable */
import { LanguageListResponseDataItem } from '../models/language-list-response-data-item';
export interface LanguageListResponse {
  data?: Array<LanguageListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
