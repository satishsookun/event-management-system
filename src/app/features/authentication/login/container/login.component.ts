import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserStoreService} from '../../../../shared/services/user-store.service';
import {AuthService} from '../../auth/auth.service';
import {AuthGuardService} from '../../auth/auth-guard.service';
import {Router} from '@angular/router';
import {UserModel} from '../../models/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'ev-account-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {

  public userLogin: FormGroup;
  public noProfileFound = false;
  public isSubmitted = false;

  private _users: UserModel[];
  private _loginSubs: Subscription;


  constructor(
    private _fb: FormBuilder,
    private _userStore: UserStoreService,
    private _authGuardService: AuthGuardService,
    private _authService: AuthService,
    private _router: Router,
  ) {
    this.userLogin = this._fb.group({})
  }

  ngOnInit(): void {
    this.setupForm();
    this.initUsers();
  }

  ngOnDestroy(): void {
    if (this._loginSubs) this._loginSubs.unsubscribe();
  }

  private initUsers(): void {
    this._userStore.userProfiles$().subscribe( (users: UserModel[]) => {
      this._users = users;
    })
  }
  private setupForm(): void {
    this.userLogin = this._fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  public onLogin(): void {
    this.isSubmitted = true;
    if (this.userLogin.valid) {
      this._loginSubs = this._authService.login(this.userLogin.value, this._users).subscribe( (loggedUser: UserModel) => {
        if (loggedUser) {
          this.noProfileFound = false;
          this._userStore.loggedUserData(loggedUser.uuid);
          this.initiateEvent(loggedUser.uuid);
          this._router.navigate(['homepage']);
        } else {
          this.noProfileFound = true;
        }
      })
    }
  }

  /**
   *
   * @param userUuid
   */
  private initiateEvent(userUuid: string): void {
    localStorage.setItem('token', userUuid);

  }

}
