import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {myRoutes} from './Routes';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {IndexControllerComponent} from './controller/index-controller/index-controller.component';
import {DashboardControllerComponent} from './controller/dashboard-controller/dashboard-controller.component';


@NgModule({
  declarations: [
    IndexControllerComponent,
    DashboardControllerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    myRoutes,
    NgZorroAntdModule.forRoot()
  ],
  providers: [],
  bootstrap: [IndexControllerComponent]
})
export class AppModule {
}
