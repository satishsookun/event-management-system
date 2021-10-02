import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import {AuthenticationComponent} from './container/authentication.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationRoutingModule,
  ],
  entryComponents: [],
  exports: [
    AuthenticationComponent
  ],
  declarations: [
    AuthenticationComponent,
  ],
  providers: []
})
export class AuthenticationModule {}
