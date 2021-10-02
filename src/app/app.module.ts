import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthenticationModule} from './pages/authentication/authentication.module';
import {DashboardModule} from './pages/dashboard/dashboard.module';
import {JwtHelperService} from '@auth0/angular-jwt';
import {AuthGuardService} from './features/authentication/services/auth-guard.service';
import {AuthService} from './features/authentication/services/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    DashboardModule
  ],
  providers: [
    JwtHelperService,
    AuthGuardService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
