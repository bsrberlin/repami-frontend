/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { LanguageService } from './services/language.service';
import { NavigationselementService } from './services/navigationselement.service';
import { PageService } from './services/page.service';
import { ProductCategoryService } from './services/product-category.service';
import { ProductMainCategoryService } from './services/product-main-category.service';
import { ReparaturbetriebService } from './services/reparaturbetrieb.service';
import { ReparaturcafeService } from './services/reparaturcafe.service';
import { StartseiteService } from './services/startseite.service';
import { UploadFileService } from './services/upload-file.service';
import { UsersPermissionsAuthService } from './services/users-permissions-auth.service';
import { UsersPermissionsUsersRolesService } from './services/users-permissions-users-roles.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    LanguageService,
    NavigationselementService,
    PageService,
    ProductCategoryService,
    ProductMainCategoryService,
    ReparaturbetriebService,
    ReparaturcafeService,
    StartseiteService,
    UploadFileService,
    UsersPermissionsAuthService,
    UsersPermissionsUsersRolesService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
