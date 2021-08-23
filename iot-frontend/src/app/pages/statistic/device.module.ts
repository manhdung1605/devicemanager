import { NgZorroAntdModule } from './../../ng-zorro-antd.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './device-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { FormsModule } from '@angular/forms';

import { SearchfilterPipe } from 'src/app/searchfilter.pipe';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DevicesRoutingModule,
        NgZorroAntdModule,
        FormsModule,
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditComponent,
        SearchfilterPipe
    ]
})
export class DeviceModule { }