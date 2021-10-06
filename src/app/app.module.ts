import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthenticationModule} from './pages/authentication/authentication.module';
import {DashboardModule} from './pages/dashboard/dashboard.module';
import {JwtHelperService} from '@auth0/angular-jwt';
import {AuthGuardService} from './features/authentication/auth/auth-guard.service';
import {AuthService} from './features/authentication/auth/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RoutingService} from './shared/services/routing.service';
import {UserStoreService} from './shared/services/user-store.service';
import {CommonModule} from '@angular/common';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,

    AppRoutingModule,
    AuthenticationModule,
    DashboardModule,
  ],
  providers: [
    JwtHelperService,
    AuthGuardService,
    AuthService,
    RoutingService,
    UserStoreService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
