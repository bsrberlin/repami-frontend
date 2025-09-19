/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authChangePasswordPost } from '../fn/users-permissions-auth/auth-change-password-post';
import { AuthChangePasswordPost$Params } from '../fn/users-permissions-auth/auth-change-password-post';
import { authEmailConfirmationGet } from '../fn/users-permissions-auth/auth-email-confirmation-get';
import { AuthEmailConfirmationGet$Params } from '../fn/users-permissions-auth/auth-email-confirmation-get';
import { authForgotPasswordPost } from '../fn/users-permissions-auth/auth-forgot-password-post';
import { AuthForgotPasswordPost$Params } from '../fn/users-permissions-auth/auth-forgot-password-post';
import { authLocalPost } from '../fn/users-permissions-auth/auth-local-post';
import { AuthLocalPost$Params } from '../fn/users-permissions-auth/auth-local-post';
import { authLocalRegisterPost } from '../fn/users-permissions-auth/auth-local-register-post';
import { AuthLocalRegisterPost$Params } from '../fn/users-permissions-auth/auth-local-register-post';
import { authProviderCallbackGet } from '../fn/users-permissions-auth/auth-provider-callback-get';
import { AuthProviderCallbackGet$Params } from '../fn/users-permissions-auth/auth-provider-callback-get';
import { authResetPasswordPost } from '../fn/users-permissions-auth/auth-reset-password-post';
import { AuthResetPasswordPost$Params } from '../fn/users-permissions-auth/auth-reset-password-post';
import { authSendEmailConfirmationPost } from '../fn/users-permissions-auth/auth-send-email-confirmation-post';
import { AuthSendEmailConfirmationPost$Params } from '../fn/users-permissions-auth/auth-send-email-confirmation-post';
import { connectProviderGet } from '../fn/users-permissions-auth/connect-provider-get';
import { ConnectProviderGet$Params } from '../fn/users-permissions-auth/connect-provider-get';
import { Error } from '../models/error';
import { UsersPermissionsUserRegistration } from '../models/users-permissions-user-registration';


/**
 * Authentication endpoints
 */
@Injectable({ providedIn: 'root' })
export class UsersPermissionsAuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `connectProviderGet()` */
  static readonly ConnectProviderGetPath = '/connect/{provider}';

  /**
   * Login with a provider.
   *
   * Redirects to provider login before being redirect to /auth/{provider}/callback
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `connectProviderGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  connectProviderGet$Response(params: ConnectProviderGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Error>> {
    return connectProviderGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Login with a provider.
   *
   * Redirects to provider login before being redirect to /auth/{provider}/callback
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `connectProviderGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  connectProviderGet(params: ConnectProviderGet$Params, context?: HttpContext): Observable<Error> {
    return this.connectProviderGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Error>): Error => r.body)
    );
  }

  /** Path part for operation `authLocalPost()` */
  static readonly AuthLocalPostPath = '/auth/local';

  /**
   * Local login.
   *
   * Returns a jwt token and user info
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authLocalPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authLocalPost$Response(params: AuthLocalPost$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersPermissionsUserRegistration>> {
    return authLocalPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Local login.
   *
   * Returns a jwt token and user info
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authLocalPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authLocalPost(params: AuthLocalPost$Params, context?: HttpContext): Observable<UsersPermissionsUserRegistration> {
    return this.authLocalPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUserRegistration>): UsersPermissionsUserRegistration => r.body)
    );
  }

  /** Path part for operation `authLocalRegisterPost()` */
  static readonly AuthLocalRegisterPostPath = '/auth/local/register';

  /**
   * Register a user.
   *
   * Returns a jwt token and user info
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authLocalRegisterPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authLocalRegisterPost$Response(params: AuthLocalRegisterPost$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersPermissionsUserRegistration>> {
    return authLocalRegisterPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Register a user.
   *
   * Returns a jwt token and user info
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authLocalRegisterPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authLocalRegisterPost(params: AuthLocalRegisterPost$Params, context?: HttpContext): Observable<UsersPermissionsUserRegistration> {
    return this.authLocalRegisterPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUserRegistration>): UsersPermissionsUserRegistration => r.body)
    );
  }

  /** Path part for operation `authProviderCallbackGet()` */
  static readonly AuthProviderCallbackGetPath = '/auth/{provider}/callback';

  /**
   * Default Callback from provider auth.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authProviderCallbackGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  authProviderCallbackGet$Response(params: AuthProviderCallbackGet$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersPermissionsUserRegistration>> {
    return authProviderCallbackGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Default Callback from provider auth.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authProviderCallbackGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authProviderCallbackGet(params: AuthProviderCallbackGet$Params, context?: HttpContext): Observable<UsersPermissionsUserRegistration> {
    return this.authProviderCallbackGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUserRegistration>): UsersPermissionsUserRegistration => r.body)
    );
  }

  /** Path part for operation `authForgotPasswordPost()` */
  static readonly AuthForgotPasswordPostPath = '/auth/forgot-password';

  /**
   * Send rest password email.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authForgotPasswordPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authForgotPasswordPost$Response(params: AuthForgotPasswordPost$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'ok'?: 'true';
}>> {
    return authForgotPasswordPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Send rest password email.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authForgotPasswordPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authForgotPasswordPost(params: AuthForgotPasswordPost$Params, context?: HttpContext): Observable<{
'ok'?: 'true';
}> {
    return this.authForgotPasswordPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'ok'?: 'true';
}>): {
'ok'?: 'true';
} => r.body)
    );
  }

  /** Path part for operation `authResetPasswordPost()` */
  static readonly AuthResetPasswordPostPath = '/auth/reset-password';

  /**
   * Rest user password.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authResetPasswordPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authResetPasswordPost$Response(params: AuthResetPasswordPost$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersPermissionsUserRegistration>> {
    return authResetPasswordPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Rest user password.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authResetPasswordPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authResetPasswordPost(params: AuthResetPasswordPost$Params, context?: HttpContext): Observable<UsersPermissionsUserRegistration> {
    return this.authResetPasswordPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUserRegistration>): UsersPermissionsUserRegistration => r.body)
    );
  }

  /** Path part for operation `authChangePasswordPost()` */
  static readonly AuthChangePasswordPostPath = '/auth/change-password';

  /**
   * Update user's own password.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authChangePasswordPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authChangePasswordPost$Response(params: AuthChangePasswordPost$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersPermissionsUserRegistration>> {
    return authChangePasswordPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Update user's own password.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authChangePasswordPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authChangePasswordPost(params: AuthChangePasswordPost$Params, context?: HttpContext): Observable<UsersPermissionsUserRegistration> {
    return this.authChangePasswordPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUserRegistration>): UsersPermissionsUserRegistration => r.body)
    );
  }

  /** Path part for operation `authEmailConfirmationGet()` */
  static readonly AuthEmailConfirmationGetPath = '/auth/email-confirmation';

  /**
   * Confirm user email.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authEmailConfirmationGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  authEmailConfirmationGet$Response(params?: AuthEmailConfirmationGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Error>> {
    return authEmailConfirmationGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Confirm user email.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authEmailConfirmationGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authEmailConfirmationGet(params?: AuthEmailConfirmationGet$Params, context?: HttpContext): Observable<Error> {
    return this.authEmailConfirmationGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Error>): Error => r.body)
    );
  }

  /** Path part for operation `authSendEmailConfirmationPost()` */
  static readonly AuthSendEmailConfirmationPostPath = '/auth/send-email-confirmation';

  /**
   * Send confirmation email.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authSendEmailConfirmationPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authSendEmailConfirmationPost$Response(params: AuthSendEmailConfirmationPost$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'email'?: string;
'sent'?: 'true';
}>> {
    return authSendEmailConfirmationPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Send confirmation email.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authSendEmailConfirmationPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authSendEmailConfirmationPost(params: AuthSendEmailConfirmationPost$Params, context?: HttpContext): Observable<{
'email'?: string;
'sent'?: 'true';
}> {
    return this.authSendEmailConfirmationPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'email'?: string;
'sent'?: 'true';
}>): {
'email'?: string;
'sent'?: 'true';
} => r.body)
    );
  }

}
