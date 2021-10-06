import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {EventStoreService} from '../../../../shared/services/event-store.service';
import {UserStoreService} from '../../../../shared/services/user-store.service';
import {EventModel} from '../../../../features/authentication/models/events.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ev-events',
  templateUrl: './events.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EventsComponent implements OnInit, OnDestroy {

  public userEvents: EventModel[];

  private _loggedUserUuid: string;
  private _userEventSubs: Subscription;
  private _eventsSubs: Subscription;

  constructor(
    private _eventStore: EventStoreService,
    private _userStore: UserStoreService,
  ) {}

  ngOnInit(): void {
    this.loggedUserUuid();
    this.initUserEvents();
  }

  ngOnDestroy(): void {
    if (this._userEventSubs) this._userEventSubs.unsubscribe();
    if (this._eventsSubs) this._eventsSubs.unsubscribe();
  }

  private loggedUserUuid(): void {
    this._loggedUserUuid = this._userStore.loggedUserUuid();
  }

  private initUserEvents(): void {
    this._userEventSubs = this._eventStore.userEvents(this._loggedUserUuid).subscribe( (events: EventModel[]) => {
      this.userEvents = events;
    })
  }

  public onDeleteEvent(eventUuid: string): void {
    this._eventsSubs = this._eventStore.deleteEvent(eventUuid, this._loggedUserUuid).subscribe( (events: EventModel[]) => {
      this.userEvents = events;
    });
  }

}
