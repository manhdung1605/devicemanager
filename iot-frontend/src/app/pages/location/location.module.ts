import { NgZorroAntdModule } from './../../ng-zorro-antd.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';

import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        LocationRoutingModule,
        NgZorroAntdModule,
        FormsModule,
    ],
    declarations: [
       LocationComponent,
      
 
    ]
})
export class LocationModule { }