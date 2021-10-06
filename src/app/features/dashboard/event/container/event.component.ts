import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {EventModel} from '../../../authentication/models/events.model';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialog} from '../../../dialog/container/dialog.component';
import {DialogService} from '../../../dialog/services/dialog.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ev-event',
  templateUrl: './event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EventComponent implements OnInit, OnDestroy {

  @Input() event: EventModel;

  @Output() emitDeleteEvent: EventEmitter<string>;

  public humanDate: string;
  public eventUuid: string;

  private _dialogSubs: Subscription;

  constructor (
    private _dialog: MatDialog,
    private _dialogService: DialogService,
  ) {
    this.emitDeleteEvent = new EventEmitter<string>();
  }

  ngOnInit(): void {
    const date = new Date(this.event.date);
    this.humanDate = date.toDateString();
    this.eventUuid = this.event.uuid;
    this.getDataFromDialog();
  }

  ngOnDestroy(): void {
    if (this._dialogSubs) this._dialogSubs.unsubscribe();
  }

  openDialog(event: EventModel) {
    this._dialog.open(ConfirmDialog, {
      maxHeight: '95vh',
      height: 'auto',
      width: '600px',
      data: event,
    });
  }

  private getDataFromDialog(): void {
    this._dialogSubs = this._dialogService.getDialogInfo$().subscribe(
      (eventUuid: string) => {
        this.emitDeleteEvent.emit(eventUuid);
      }
    )
  }
}
