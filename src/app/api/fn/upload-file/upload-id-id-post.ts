/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UploadFile } from '../../models/upload-file';

export interface UploadIdIdPost$Params {

/**
 * File id
 */
  id: string;
  
    /**
     * Upload files
     */
    body: {
'fileInfo'?: {
'name'?: string;
'alternativeText'?: string;
'caption'?: string;
};
'files'?: Blob;
}
}

export function uploadIdIdPost(http: HttpClient, rootUrl: string, params: UploadIdIdPost$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UploadFile>>> {
  const rb = new RequestBuilder(rootUrl, uploadIdIdPost.PATH, 'post');
  if (params) {
    rb.query('id', params.id, {});
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

uploadIdIdPost.PATH = '/upload?id={id}';
