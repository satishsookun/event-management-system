import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserStoreService} from '../../../../shared/services/user-store.service';
import {EventStoreService} from '../../../../shared/services/event-store.service';
import {Router} from '@angular/router';
import {RoutingService} from '../../../../shared/services/routing.service';
import {EventModel} from '../../../../features/authentication/models/events.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ev-create-event',
  templateUrl: './create-event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateEventComponent implements OnInit, OnDestroy {

  public createEvent: FormGroup;
  public isSubmitted = false;
  public isEditInterface: boolean;
  public title: string;

  private _loggedUserUuid: string;
  private _eventUuid: string;

  private _saveSubs: Subscription;
  private _eventSubs: Subscription;

  constructor(
    private _fb: FormBuilder,
    private _userStore: UserStoreService,
    private _eventStore: EventStoreService,
    private _router: Router,
    private _routingService: RoutingService,
  ) {}

  ngOnInit(): void {
    this.setupForm();
    this.loggedUserUuid();
    this._routingService.currentUrl$().subscribe( (url) => {
      const splitUrl = url.split('/');
      this._eventUuid = splitUrl[2];
      this.isEditInterface = url.split('/').indexOf('edit-event') > -1;
    });
    this.handleInterfaceTitle();
    this.manageEditEvent();
  }

  ngOnDestroy(): void {
    if (this._saveSubs) this._saveSubs.unsubscribe();
    if (this._eventSubs) this._eventSubs.unsubscribe();
  }

  private setupForm() {
    this.createEvent = this._fb.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      description: ['', [Validators.required]],
      uuid: ['']
    });
  }

  private handleInterfaceTitle(): void {
    this.title = this.isEditInterface ? 'Edit event' : 'Create an event'
  }

  private loggedUserUuid(): void {
    this._loggedUserUuid = this._userStore.loggedUserUuid();
  }

  public onCreate(): void {
    this.isSubmitted = true;
    if (this.createEvent.valid) {
      this.createEvent.get('uuid').setValue(this.generateUuid(3));
      this._eventStore.createEvent(this._loggedUserUuid, this.createEvent.value);
      this._router.navigate(['homepage/events']);
    }
  }

  private generateUuid(max: number): string {
    const random = JSON.stringify(Math.random() * max);
    const joinString = random.split('.').join('');
    return joinString;
  }

  private manageEditEvent(): void {
    if (this.isEditInterface) {
      this.initEditedEvent()
    }
  }

  private initEditedEvent(): void {
    this._eventSubs = this._eventStore.eventByUuid(this._eventUuid, this._loggedUserUuid).subscribe(
      (editedEvent: EventModel) => {
        this.createEvent.patchValue({
          name: editedEvent.name,
          date: editedEvent.date,
          description: editedEvent.description
        })
      }
    );
  }

  public onEdit() {
    this._saveSubs = this._eventStore.saveEvent(this._eventUuid, this._loggedUserUuid, this.createEvent.value).subscribe(
      () => {
        this._router.navigate(['homepage/events']);
      }
    )
  }
}
