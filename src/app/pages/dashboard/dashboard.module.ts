import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './container/dashboard.component';
import {HeaderModule} from '../../features/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    DashboardRoutingModule,
  ],
  entryComponents: [],
  exports: [
    DashboardComponent,
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: []
})
export class DashboardModule {}
