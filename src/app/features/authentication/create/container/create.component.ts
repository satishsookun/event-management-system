import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../models/user.model';
import {UserStoreService} from '../../../../shared/services/user-store.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ev-account-create',
  templateUrl: './create.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateComponent implements OnInit, OnDestroy {
  public isTermAccepted: boolean;
  public createUser: FormGroup;
  public isSubmitted = false;

  private _existingUsers: UserModel[];
  private _usersSubs: Subscription;

  constructor (
    private _fb: FormBuilder,
    private _userStore: UserStoreService,
  ) {
    this.isTermAccepted = false;
    this.createUser = this._fb.group({});
  }

  ngOnInit(): void {
    this.setupForm();
    this.initUsers();
  }

  ngOnDestroy(): void {
    if (this._usersSubs) this._usersSubs.unsubscribe();
  }

  private setupForm() {
    const emailReg = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    const letters = /^[A-Za-z]+$/;
    const phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    this.createUser = this._fb.group({
      firstName: ['', [Validators.required, Validators.pattern(letters)]],
      lastName: ['', [Validators.required, Validators.pattern(letters)]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.pattern(emailReg)]],
      phone: ['', [Validators.required, Validators.pattern(phoneReg)]],
    });
  }

  public updateFilters() {
    this.isTermAccepted = !this.isTermAccepted;
  }

  public onCreate() {
    this.isSubmitted = true;
    if (this.createUser.valid) {
      this._existingUsers.push(this.createUser.value);
      this._existingUsers[0].uuid = this.generateUuid(3);
      this._userStore.userProfiles(this._existingUsers);
    }
  }

  private initUsers(): void {
    this._usersSubs = this._userStore.userProfiles$().subscribe( (users: UserModel[]) => {
      this._existingUsers = users;
    })
  }

  private generateUuid(max: number): string {
    const random = JSON.stringify(Math.random() * max);
    const joinString = random.split('.').join('');
    return joinString;
  }
}
