import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SideBarComponent} from './container/side-bar.component';
import {LogoModule} from '../../logo/logo.module';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LogoModule,
    MatIconModule,
  ],
  entryComponents: [
    SideBarComponent
  ],
  exports: [SideBarComponent],
  declarations: [
    SideBarComponent,
  ],
  providers: [],
})

export class SideBarModule {}
