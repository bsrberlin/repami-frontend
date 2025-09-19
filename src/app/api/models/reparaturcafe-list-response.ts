/* tslint:disable */
/* eslint-disable */
import { ReparaturcafeListResponseDataItem } from '../models/reparaturcafe-list-response-data-item';
export interface ReparaturcafeListResponse {
  data?: Array<ReparaturcafeListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
