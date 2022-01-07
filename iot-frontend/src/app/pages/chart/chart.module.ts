import { NgZorroAntdModule } from './../../ng-zorro-antd.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from './chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        NgxChartsModule,
        CommonModule,
        ReactiveFormsModule,
    
        NgZorroAntdModule,
        FormsModule,
        HighchartsChartModule,
        HttpClientModule,
        ToastrModule.forRoot()
    ],
    declarations: [
        ChartComponent,
      
 
    ]
})
export class ChartsModule { }