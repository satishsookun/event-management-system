import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import {AuthenticationComponent} from './container/authentication.component';
import {CreateModule} from '../../features/authentication/create/create.module';
import {LoginModule} from '../../features/authentication/login/login.module';
import {CreateActionComponent} from './ui/create-action/create-action.component';
import {LoginActionComponent} from './ui/login-action/login-action.component';
import {LogoModule} from '../../features/logo/logo.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationRoutingModule,
    CreateModule,
    LoginModule,
    LogoModule
  ],
  entryComponents: [
    AuthenticationComponent
  ],
  exports: [],
  declarations: [
    AuthenticationComponent,
    CreateActionComponent,
    LoginActionComponent,
  ],
  providers: []
})
export class AuthenticationModule {
}
