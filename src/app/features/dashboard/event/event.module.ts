import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EventComponent} from './container/event.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  entryComponents: [
    EventComponent
  ],
  exports: [EventComponent],
  declarations: [
    EventComponent,
  ],
  providers: [],
})

export class EventModule {}
