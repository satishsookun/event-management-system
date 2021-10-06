import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {DialogService} from './services/dialog.service';
import {ConfirmDialog} from './container/dialog.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		MatDialogModule,
    MatIconModule,
	],
	entryComponents: [ConfirmDialog],
	exports: [ConfirmDialog],
	declarations: [
    ConfirmDialog
	],
	providers: [ DialogService, {provide: MatDialogRef, useValue: {}}, { provide: MAT_DIALOG_DATA, useValue: [] }],
})
export class DialogModule {
}
