import { NgModule } from '@angular/core';
import { NavigationselementService, PageService, ProductCategoryService, UploadFileService, UsersPermissionsAuthService, UsersPermissionsUsersRolesService } from './api/services';

@NgModule({
    providers: [
        PageService,
        ProductCategoryService,
        UploadFileService,
        UsersPermissionsAuthService,
        UsersPermissionsUsersRolesService,
        NavigationselementService,
    ]
})

export class StrapiProvidersModule { }