/* tslint:disable */
/* eslint-disable */
import { ProductCategoryListResponseDataItem } from '../models/product-category-list-response-data-item';
export interface ProductCategoryListResponse {
  data?: Array<ProductCategoryListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
