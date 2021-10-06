import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './container/dashboard.component';
import {HeaderModule} from '../../features/dashboard/header/header.module';
import {SideBarModule} from '../../features/dashboard/side-bar/side-bar.module';
import {EventModule} from '../../features/dashboard/event/event.module';
import {CreateEventComponent} from './container/create-event/create-event.component';
import {EventsComponent} from './container/events/events.component';
import {UserStoreService} from '../../shared/services/user-store.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,

    HeaderModule,
    SideBarModule,
    EventModule,
    DashboardRoutingModule,
  ],
  entryComponents: [
    DashboardComponent
  ],
  exports: [],
  declarations: [
    DashboardComponent,
    CreateEventComponent,
    EventsComponent,
  ],
  providers: [
    UserStoreService
  ]
})
export class DashboardModule {}
