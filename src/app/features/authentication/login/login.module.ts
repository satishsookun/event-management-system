import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './container/login.component';
import {UserStoreService} from '../../../shared/services/user-store.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

    MatFormFieldModule,
    MatInputModule,
  ],
  entryComponents: [
    LoginComponent
  ],
  exports: [LoginComponent],
  declarations: [
    LoginComponent,
  ],
  providers: [
    UserStoreService,
  ],
})

export class LoginModule {}
