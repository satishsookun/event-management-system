import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './container/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule
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
