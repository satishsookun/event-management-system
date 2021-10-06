import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogService} from '../services/dialog.service';

@Component({
  selector: 'ev-dialog',
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialogService: DialogService,
  ) {}

  ngOnInit() {}

  onCancel() {
    this.dialogRef.close();
  }

  onConfirm() {
    this._dialogService.dialogData(this.data.uuid);
    this.dialogRef.close();
  }
}
