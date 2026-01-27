import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { provideTranslateService } from '@ngx-translate/core';

const modules = [
    RouterModule,
    RouterOutlet,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LeafletModule,
    NzSelectModule,
    NzFormModule,
    NzInputModule,
    NzGridModule,
    NzIconModule,
    NzButtonModule,
    NzCardModule,
    NzTagModule,
    NzDividerModule,
    NzSpaceModule,
    NzDropDownModule,
    NzDrawerModule,
    NzCascaderModule,
    NzCarouselModule,
    NzCollapseModule,
    NzTreeSelectModule,
    NzCheckboxModule,
    NzUploadModule
]

@NgModule({
    imports: modules,
    exports: modules,
    providers: [
        provideHttpClient(),
        provideTranslateService(),
    ]
})

export class AllImportsModule { }