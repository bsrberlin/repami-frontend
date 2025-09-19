/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { UsersPermissionsPermissionsTree } from '../models/users-permissions-permissions-tree';
import { UsersPermissionsRole } from '../models/users-permissions-role';
import { UsersPermissionsUser } from '../models/users-permissions-user';
import { usersCountGet } from '../fn/users-permissions-users-roles/users-count-get';
import { UsersCountGet$Params } from '../fn/users-permissions-users-roles/users-count-get';
import { usersGet } from '../fn/users-permissions-users-roles/users-get';
import { UsersGet$Params } from '../fn/users-permissions-users-roles/users-get';
import { usersIdDelete } from '../fn/users-permissions-users-roles/users-id-delete';
import { UsersIdDelete$Params } from '../fn/users-permissions-users-roles/users-id-delete';
import { usersIdGet } from '../fn/users-permissions-users-roles/users-id-get';
import { UsersIdGet$Params } from '../fn/users-permissions-users-roles/users-id-get';
import { usersIdPut } from '../fn/users-permissions-users-roles/users-id-put';
import { UsersIdPut$Params } from '../fn/users-permissions-users-roles/users-id-put';
import { usersMeGet } from '../fn/users-permissions-users-roles/users-me-get';
import { UsersMeGet$Params } from '../fn/users-permissions-users-roles/users-me-get';
import { usersPermissionsPermissionsGet } from '../fn/users-permissions-users-roles/users-permissions-permissions-get';
import { UsersPermissionsPermissionsGet$Params } from '../fn/users-permissions-users-roles/users-permissions-permissions-get';
import { usersPermissionsRolesGet } from '../fn/users-permissions-users-roles/users-permissions-roles-get';
import { UsersPermissionsRolesGet$Params } from '../fn/users-permissions-users-roles/users-permissions-roles-get';
import { usersPermissionsRolesIdGet } from '../fn/users-permissions-users-roles/users-permissions-roles-id-get';
import { UsersPermissionsRolesIdGet$Params } from '../fn/users-permissions-users-roles/users-permissions-roles-id-get';
import { usersPermissionsRolesPost } from '../fn/users-permissions-users-roles/users-permissions-roles-post';
import { UsersPermissionsRolesPost$Params } from '../fn/users-permissions-users-roles/users-permissions-roles-post';
import { usersPermissionsRolesRoleDelete } from '../fn/users-permissions-users-roles/users-permissions-roles-role-delete';
import { UsersPermissionsRolesRoleDelete$Params } from '../fn/users-permissions-users-roles/users-permissions-roles-role-delete';
import { usersPermissionsRolesRolePut } from '../fn/users-permissions-users-roles/users-permissions-roles-role-put';
import { UsersPermissionsRolesRolePut$Params } from '../fn/users-permissions-users-roles/users-permissions-roles-role-put';
import { usersPost } from '../fn/users-permissions-users-roles/users-post';
import { UsersPost$Params } from '../fn/users-permissions-users-roles/users-post';


/**
 * Users, roles, and permissions endpoints
 */
@Injectable({ providedIn: 'root' })
export class UsersPermissionsUsersRolesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `usersPermissionsPermissionsGet()` */
  static readonly UsersPermissionsPermissionsGetPath = '/users-permissions/permissions';

  /**
   * Get default generated permissions.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersPermissionsPermissionsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersPermissionsPermissionsGet$Response(params?: UsersPermissionsPermissionsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'permissions'?: UsersPermissionsPermissionsTree;
}>> {
    return usersPermissionsPermissionsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get default generated permissions.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersPermissionsPermissionsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersPermissionsPermissionsGet(params?: UsersPermissionsPermissionsGet$Params, context?: HttpContext): Observable<{
'permissions'?: UsersPermissionsPermissionsTree;
}> {
    return this.usersPermissionsPermissionsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'permissions'?: UsersPermissionsPermissionsTree;
}>): {
'permissions'?: UsersPermissionsPermissionsTree;
} => r.body)
    );
  }

  /** Path part for operation `usersPermissionsRolesGet()` */
  static readonly UsersPermissionsRolesGetPath = '/users-permissions/roles';

  /**
   * List roles.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersPermissionsRolesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersPermissionsRolesGet$Response(params?: UsersPermissionsRolesGet$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'roles'?: Array<UsersPermissionsRole & {
'nb_users'?: number;
}>;
}>> {
    return usersPermissionsRolesGet(this.http, this.rootUrl, params, context);
  }

  /**
   * List roles.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersPermissionsRolesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersPermissionsRolesGet(params?: UsersPermissionsRolesGet$Params, context?: HttpContext): Observable<{
'roles'?: Array<UsersPermissionsRole & {
'nb_users'?: number;
}>;
}> {
    return this.usersPermissionsRolesGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'roles'?: Array<UsersPermissionsRole & {
'nb_users'?: number;
}>;
}>): {
'roles'?: Array<UsersPermissionsRole & {
'nb_users'?: number;
}>;
} => r.body)
    );
  }

  /** Path part for operation `usersPermissionsRolesPost()` */
  static readonly UsersPermissionsRolesPostPath = '/users-permissions/roles';

  /**
   * Create a role.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersPermissionsRolesPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersPermissionsRolesPost$Response(params: UsersPermissionsRolesPost$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'ok'?: 'true';
}>> {
    return usersPermissionsRolesPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a role.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersPermissionsRolesPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersPermissionsRolesPost(params: UsersPermissionsRolesPost$Params, context?: HttpContext): Observable<{
'ok'?: 'true';
}> {
    return this.usersPermissionsRolesPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'ok'?: 'true';
}>): {
'ok'?: 'true';
} => r.body)
    );
  }

  /** Path part for operation `usersPermissionsRolesIdGet()` */
  static readonly UsersPermissionsRolesIdGetPath = '/users-permissions/roles/{id}';

  /**
   * Get a role.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersPermissionsRolesIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersPermissionsRolesIdGet$Response(params: UsersPermissionsRolesIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'role'?: UsersPermissionsRole;
}>> {
    return usersPermissionsRolesIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a role.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersPermissionsRolesIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersPermissionsRolesIdGet(params: UsersPermissionsRolesIdGet$Params, context?: HttpContext): Observable<{
'role'?: UsersPermissionsRole;
}> {
    return this.usersPermissionsRolesIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'role'?: UsersPermissionsRole;
}>): {
'role'?: UsersPermissionsRole;
} => r.body)
    );
  }

  /** Path part for operation `usersPermissionsRolesRolePut()` */
  static readonly UsersPermissionsRolesRolePutPath = '/users-permissions/roles/{role}';

  /**
   * Update a role.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersPermissionsRolesRolePut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersPermissionsRolesRolePut$Response(params: UsersPermissionsRolesRolePut$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'ok'?: 'true';
}>> {
    return usersPermissionsRolesRolePut(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a role.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersPermissionsRolesRolePut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersPermissionsRolesRolePut(params: UsersPermissionsRolesRolePut$Params, context?: HttpContext): Observable<{
'ok'?: 'true';
}> {
    return this.usersPermissionsRolesRolePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'ok'?: 'true';
}>): {
'ok'?: 'true';
} => r.body)
    );
  }

  /** Path part for operation `usersPermissionsRolesRoleDelete()` */
  static readonly UsersPermissionsRolesRoleDeletePath = '/users-permissions/roles/{role}';

  /**
   * Delete a role.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersPermissionsRolesRoleDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersPermissionsRolesRoleDelete$Response(params: UsersPermissionsRolesRoleDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'ok'?: 'true';
}>> {
    return usersPermissionsRolesRoleDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a role.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersPermissionsRolesRoleDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersPermissionsRolesRoleDelete(params: UsersPermissionsRolesRoleDelete$Params, context?: HttpContext): Observable<{
'ok'?: 'true';
}> {
    return this.usersPermissionsRolesRoleDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'ok'?: 'true';
}>): {
'ok'?: 'true';
} => r.body)
    );
  }

  /** Path part for operation `usersGet()` */
  static readonly UsersGetPath = '/users';

  /**
   * Get list of users.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGet$Response(params?: UsersGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UsersPermissionsUser>>> {
    return usersGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get list of users.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersGet(params?: UsersGet$Params, context?: HttpContext): Observable<Array<UsersPermissionsUser>> {
    return this.usersGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UsersPermissionsUser>>): Array<UsersPermissionsUser> => r.body)
    );
  }

  /** Path part for operation `usersPost()` */
  static readonly UsersPostPath = '/users';

  /**
   * Create a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersPost$Response(params: UsersPost$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersPermissionsUser & {
'role'?: UsersPermissionsRole;
}>> {
    return usersPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersPost(params: UsersPost$Params, context?: HttpContext): Observable<UsersPermissionsUser & {
'role'?: UsersPermissionsRole;
}> {
    return this.usersPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUser & {
'role'?: UsersPermissionsRole;
}>): UsersPermissionsUser & {
'role'?: UsersPermissionsRole;
} => r.body)
    );
  }

  /** Path part for operation `usersIdGet()` */
  static readonly UsersIdGetPath = '/users/{id}';

  /**
   * Get a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersIdGet$Response(params: UsersIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersPermissionsUser>> {
    return usersIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get a user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersIdGet(params: UsersIdGet$Params, context?: HttpContext): Observable<UsersPermissionsUser> {
    return this.usersIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUser>): UsersPermissionsUser => r.body)
    );
  }

  /** Path part for operation `usersIdPut()` */
  static readonly UsersIdPutPath = '/users/{id}';

  /**
   * Update a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersIdPut$Response(params: UsersIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersPermissionsUser & {
'role'?: UsersPermissionsRole;
}>> {
    return usersIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersIdPut(params: UsersIdPut$Params, context?: HttpContext): Observable<UsersPermissionsUser & {
'role'?: UsersPermissionsRole;
}> {
    return this.usersIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUser & {
'role'?: UsersPermissionsRole;
}>): UsersPermissionsUser & {
'role'?: UsersPermissionsRole;
} => r.body)
    );
  }

  /** Path part for operation `usersIdDelete()` */
  static readonly UsersIdDeletePath = '/users/{id}';

  /**
   * Delete a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersIdDelete$Response(params: UsersIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersPermissionsUser>> {
    return usersIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete a user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersIdDelete(params: UsersIdDelete$Params, context?: HttpContext): Observable<UsersPermissionsUser> {
    return this.usersIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUser>): UsersPermissionsUser => r.body)
    );
  }

  /** Path part for operation `usersMeGet()` */
  static readonly UsersMeGetPath = '/users/me';

  /**
   * Get authenticated user info.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersMeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersMeGet$Response(params?: UsersMeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<UsersPermissionsUser>> {
    return usersMeGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get authenticated user info.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersMeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersMeGet(params?: UsersMeGet$Params, context?: HttpContext): Observable<UsersPermissionsUser> {
    return this.usersMeGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<UsersPermissionsUser>): UsersPermissionsUser => r.body)
    );
  }

  /** Path part for operation `usersCountGet()` */
  static readonly UsersCountGetPath = '/users/count';

  /**
   * Get user count.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersCountGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersCountGet$Response(params?: UsersCountGet$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return usersCountGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get user count.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersCountGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersCountGet(params?: UsersCountGet$Params, context?: HttpContext): Observable<number> {
    return this.usersCountGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
