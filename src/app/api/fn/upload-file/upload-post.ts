/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UploadFile } from '../../models/upload-file';

export interface UploadPost$Params {
  
    /**
     * Upload files
     */
    body: {

/**
 * The folder where the file(s) will be uploaded to (only supported on strapi-provider-upload-aws-s3).
 */
'path'?: string;

/**
 * The ID of the entry which the file(s) will be linked to
 */
'refId'?: string;

/**
 * The unique ID (uid) of the model which the file(s) will be linked to (api::restaurant.restaurant).
 */
'ref'?: string;

/**
 * The field of the entry which the file(s) will be precisely linked to.
 */
'field'?: string;
'files': Array<Blob>;
}
}

export function uploadPost(http: HttpClient, rootUrl: string, params: UploadPost$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UploadFile>>> {
  const rb = new RequestBuilder(rootUrl, uploadPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<UploadFile>>;
    })
  );
}

uploadPost.PATH = '/upload';
