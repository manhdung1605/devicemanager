import { RegisterComponent } from './auth/register/register.component';
import { LocationComponent } from './pages/location/location.component';
import { ChartComponent } from './pages/chart/chart.component';
// import { LoginComponent } from './auth/login/login.component';
// import { StatisticComponent } from './pages/statistic/statistic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'

const authModule = () => import('./auth/auth/auth.module').then(x => x.AuthModule); 
const deviceModule = () => import('./pages/statistic/device.module').then(x => x.DeviceModule);  
const routes: Routes = [
  {
    path: 'location',
    component: LocationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'chart',
    component: ChartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login'
  },
  { path: 'auth', loadChildren: authModule },
  { path: 'device', loadChildren: deviceModule, canActivate: [AuthGuard] },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'statistic',
  //   component: StatisticComponent,
   // canActivate: [AuthGuard]
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent
  // },
  // { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  // { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  // { path: 'location', loadChildren: () => import('./pages/location/location.module').then(m => m.LocationModule) },
  // { path: 'statistic', loadChildren: () => import('./pages/statistic/statistic.module').then(m => m.StatisticModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
