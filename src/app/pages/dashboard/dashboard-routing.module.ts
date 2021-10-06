import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './container/dashboard.component';
import {EventsComponent} from './container/events/events.component';
import {CreateEventComponent} from './container/create-event/create-event.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: EventsComponent,
      },
      {
        path: 'events',
        component: EventsComponent,
      },
      {
        path: 'create-event',
        component: CreateEventComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
