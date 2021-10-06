import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CreateComponent} from './container/create.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserStoreService} from '../../../shared/services/user-store.service';
import {EventStoreService} from '../../../shared/services/event-store.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  entryComponents: [
    CreateComponent
  ],
  exports: [CreateComponent],
  declarations: [
    CreateComponent,
  ],
  providers: [
    UserStoreService,
    EventStoreService,
  ],
})

export class CreateModule {}
