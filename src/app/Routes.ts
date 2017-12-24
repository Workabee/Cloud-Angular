import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardControllerComponent} from './controller/dashboard-controller/dashboard-controller.component'

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardControllerComponent
  }, {
    path: '',  // 空路径规则，表征任何不符合规则的路由皆按此规则进行跳转
    redirectTo: '/dashboard',  // 重定向至“/hello”
    pathMatch: 'full'  // 路径匹配规则
  }];

export const myRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
