import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EventComponent} from './container/event.component';
import {MatIconModule} from '@angular/material/icon';
import {DialogModule} from '../../dialog/dialog.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    DialogModule,
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
