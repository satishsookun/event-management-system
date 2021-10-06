import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {EventModel} from '../../../authentication/models/events.model';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialog} from '../../../dialog/container/dialog.component';

@Component({
  selector: 'ev-event',
  templateUrl: './event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EventComponent implements OnInit, OnDestroy {

  @Input() event: EventModel;

  public humanDate: string;

  constructor (
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const date = new Date(this.event.date);
    this.humanDate = date.toDateString();
  }

  ngOnDestroy(): void {}

  openDialog() {
    this._dialog.open(ConfirmDialog, {
      maxHeight: '95vh',
      height: 'auto',
      width: '600px',
      panelClass: 'ps-confirm-dialog',
      data: this.event,
    });
  }
}
