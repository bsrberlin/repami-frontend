/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { UploadFile } from '../models/upload-file';
import { uploadFilesGet } from '../fn/upload-file/upload-files-get';
import { UploadFilesGet$Params } from '../fn/upload-file/upload-files-get';
import { uploadFilesIdDelete } from '../fn/upload-file/upload-files-id-delete';
import { UploadFilesIdDelete$Params } from '../fn/upload-file/upload-files-id-delete';
import { uploadFilesIdGet } from '../fn/upload-file/upload-files-id-get';
import { UploadFilesIdGet$Params } from '../fn/upload-file/upload-files-id-get';
import { uploadIdIdPost } from '../fn/upload-file/upload-id-id-post';
import { UploadIdIdPost$Params } from '../fn/upload-file/upload-id-id-post';
import { uploadPost } from '../fn/upload-file/upload-post';
import { UploadPost$Params } from '../fn/upload-file/upload-post';

@Injectable({ providedIn: 'root' })
export class UploadFileService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `uploadPost()` */
  static readonly UploadPostPath = '/upload';

  /**
   * Upload files
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadPost$Response(params: UploadPost$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UploadFile>>> {
    return uploadPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Upload files
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadPost(params: UploadPost$Params, context?: HttpContext): Observable<Array<UploadFile>> {
    return this.uploadPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UploadFile>>): Array<UploadFile> => r.body)
    );
  }

  /** Path part for operation `uploadIdIdPost()` */
  static readonly UploadIdIdPostPath = '/upload?id={id}';

  /**
   * Upload file information
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadIdIdPost()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadIdIdPost$Response(params: UploadIdIdPost$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UploadFile>>> {
    return uploadIdIdPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Upload file information
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadIdIdPost$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadIdIdPost(params: UploadIdIdPost$Params, context?: HttpContext): Observable<Array<UploadFile>> {
    return this.uploadIdIdPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UploadFile>>): Array<UploadFile> => r.body)
    );
  }

  /** Path part for operation `uploadFilesGet()` */
  static readonly UploadFilesGetPath = '/upload/files';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFilesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  uploadFilesGet$Response(params?: UploadFilesGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UploadFile>>> {
    return uploadFilesGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadFilesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uploadFilesGet(params?: UploadFilesGet$Params, context?: HttpContext): Observable<Array<UploadFile>> {
    return this.uploadFilesGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UploadFile>>): Array<UploadFile> => r.body)
    );
  }

  /** Path part for operation `uploadFilesIdGet()` */
  static readonly UploadFilesIdGetPath = '/upload/files/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFilesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  uploadFilesIdGet$Response(params: UploadFilesIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<UploadFile>> {
    return uploadFilesIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadFilesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uploadFilesIdGet(params: UploadFilesIdGet$Params, context?: HttpContext): Observable<UploadFile> {
    return this.uploadFilesIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<UploadFile>): UploadFile => r.body)
    );
  }

  /** Path part for operation `uploadFilesIdDelete()` */
  static readonly UploadFilesIdDeletePath = '/upload/files/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadFilesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  uploadFilesIdDelete$Response(params: UploadFilesIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<UploadFile>> {
    return uploadFilesIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadFilesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uploadFilesIdDelete(params: UploadFilesIdDelete$Params, context?: HttpContext): Observable<UploadFile> {
    return this.uploadFilesIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<UploadFile>): UploadFile => r.body)
    );
  }

}
