import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserStoreService} from '../../../../shared/services/user-store.service';
import {EventStoreService} from '../../../../shared/services/event-store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ev-create-event',
  templateUrl: './create-event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateEventComponent implements OnInit, OnDestroy {

  public createEvent: FormGroup;
  public isSubmitted = false;

  private _loggedUserUuid: string;

  constructor(
    private _fb: FormBuilder,
    private _userStore: UserStoreService,
    private _eventStore: EventStoreService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.setupForm();
    this.loggedUserUuid();
  }

  ngOnDestroy(): void {}

  private setupForm() {
    this.createEvent = this._fb.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      description: ['', [Validators.required]],
      uuid: ['']
    });
  }

  private loggedUserUuid(): void {
    this._loggedUserUuid = this._userStore.loggedUserUuid();
    console.log(this._loggedUserUuid, 'uuid')
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
}
