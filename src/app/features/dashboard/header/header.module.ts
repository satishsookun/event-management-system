import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './container/header.component';
import {ProfileComponent} from './ui/profile/profile.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent,
    ProfileComponent,
  ],
  providers: [],
})

export class HeaderModule {
  
}
