/* tslint:disable */
/* eslint-disable */
import { NavigationselementListResponseDataItem } from '../models/navigationselement-list-response-data-item';
export interface NavigationselementListResponse {
  data?: Array<NavigationselementListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
