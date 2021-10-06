import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from './container/logo.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  entryComponents: [
    LogoComponent
  ],
  exports: [LogoComponent],
  declarations: [
    LogoComponent,
  ],
  providers: [],
})

export class LogoModule {}
