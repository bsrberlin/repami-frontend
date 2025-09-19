/* tslint:disable */
/* eslint-disable */
import { ReparaturbetriebListResponseDataItem } from '../models/reparaturbetrieb-list-response-data-item';
export interface ReparaturbetriebListResponse {
  data?: Array<ReparaturbetriebListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
