/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UploadFile } from '../../models/upload-file';

export interface UploadFilesGet$Params {
}

export function uploadFilesGet(http: HttpClient, rootUrl: string, params?: UploadFilesGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UploadFile>>> {
  const rb = new RequestBuilder(rootUrl, uploadFilesGet.PATH, 'get');
  if (params) {
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

uploadFilesGet.PATH = '/upload/files';
