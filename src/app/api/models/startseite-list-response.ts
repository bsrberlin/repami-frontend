/* tslint:disable */
/* eslint-disable */
import { StartseiteListResponseDataItem } from '../models/startseite-list-response-data-item';
export interface StartseiteListResponse {
  data?: Array<StartseiteListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
