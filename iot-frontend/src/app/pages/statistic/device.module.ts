import { NgZorroAntdModule } from './../../ng-zorro-antd.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './device-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit/add-edit.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DevicesRoutingModule,
        NgZorroAntdModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditComponent
    ]
})
export class DeviceModule { }