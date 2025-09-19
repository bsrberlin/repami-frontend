/* tslint:disable */
/* eslint-disable */
import { PageListResponseDataItemLocalized } from '../models/page-list-response-data-item-localized';
export interface Page {
  Content?: string;
  Path?: string;
  Title?: string;
  createdAt?: string;
  createdBy?: {
'data'?: {
'id'?: number;
'attributes'?: {
'firstname'?: string;
'lastname'?: string;
'username'?: string;
'email'?: string;
'resetPasswordToken'?: string;
'registrationToken'?: string;
'isActive'?: boolean;
'roles'?: {
'data'?: Array<{
'id'?: number;
'attributes'?: {
'name'?: string;
'code'?: string;
'description'?: string;
'users'?: {
'data'?: Array<{
'id'?: number;
'attributes'?: {
};
}>;
};
'permissions'?: {
'data'?: Array<{
'id'?: number;
'attributes'?: {
'action'?: string;
'actionParameters'?: any;
'subject'?: string;
'properties'?: any;
'conditions'?: any;
'role'?: {
'data'?: {
'id'?: number;
'attributes'?: {
};
};
};
'createdAt'?: string;
'updatedAt'?: string;
'createdBy'?: {
'data'?: {
'id'?: number;
'attributes'?: {
};
};
};
'updatedBy'?: {
'data'?: {
'id'?: number;
'attributes'?: {
};
};
};
};
}>;
};
'createdAt'?: string;
'updatedAt'?: string;
'createdBy'?: {
'data'?: {
'id'?: number;
'attributes'?: {
};
};
};
'updatedBy'?: {
'data'?: {
'id'?: number;
'attributes'?: {
};
};
};
};
}>;
};
'blocked'?: boolean;
'preferedLanguage'?: string;
'createdAt'?: string;
'updatedAt'?: string;
'createdBy'?: {
'data'?: {
'id'?: number;
'attributes'?: {
};
};
};
'updatedBy'?: {
'data'?: {
'id'?: number;
'attributes'?: {
};
};
};
};
};
};
  locale?: string;
  localizations?: {
'data'?: Array<PageListResponseDataItemLocalized>;
};
  publishedAt?: string;
  updatedAt?: string;
  updatedBy?: {
'data'?: {
'id'?: number;
'attributes'?: {
};
};
};
}
