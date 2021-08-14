// import { StatisticComponent } from './pages/statistic/list.component';
import { RegisterComponent } from './auth/register/register.component';
import { LocationComponent } from './pages/location/location.component';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { ToastrModule } from 'ngx-toastr';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    LocationComponent,
    // RegisterComponent,
    //StatisticComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    ToastrModule.forRoot(),
    NgZorroAntdModule,

   
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule { }
