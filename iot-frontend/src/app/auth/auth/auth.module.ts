import { NgZorroAntdModule } from './../../ng-zorro-antd.module';
import { RegisterComponent } from './../register/register.component';
import { LayoutComponent } from './../layout/layout.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from '../../auth/login/login.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        NgZorroAntdModule
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent
    ]
})
export class AuthModule { }