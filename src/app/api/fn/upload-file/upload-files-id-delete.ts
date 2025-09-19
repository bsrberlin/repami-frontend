/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UploadFile } from '../../models/upload-file';

export interface UploadFilesIdDelete$Params {
  id: string;
}

export function uploadFilesIdDelete(http: HttpClient, rootUrl: string, params: UploadFilesIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<UploadFile>> {
  const rb = new RequestBuilder(rootUrl, uploadFilesIdDelete.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UploadFile>;
    })
  );
}

uploadFilesIdDelete.PATH = '/upload/files/{id}';
