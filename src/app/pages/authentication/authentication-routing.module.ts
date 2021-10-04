import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../../features/authentication/login/container/login.component';
import {AuthenticationComponent} from './container/authentication.component';
import {CreateComponent} from '../../features/authentication/create/container/create.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
