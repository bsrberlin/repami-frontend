/* tslint:disable */
/* eslint-disable */
import { ProductMainCategoryListResponseDataItem } from '../models/product-main-category-list-response-data-item';
export interface ProductMainCategoryListResponse {
  data?: Array<ProductMainCategoryListResponseDataItem>;
  meta?: {
'pagination'?: {
'page'?: number;
'pageSize'?: number;
'pageCount'?: number;
'total'?: number;
};
};
}
