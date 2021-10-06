import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {UserStoreService} from '../../../../shared/services/user-store.service';
import {Subscription} from 'rxjs';
import {UserModel} from '../../../authentication/models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'ev-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit, OnDestroy {

  public avatar: string;
  public fullName: string;

  private _userStoreSubs: Subscription;

  constructor(
    private _userStore: UserStoreService,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.getLoggedUser();
    this.buildAvatar();
  }

  ngOnDestroy(): void {
    if (this._userStoreSubs) this._userStoreSubs.unsubscribe();
  }

  private getLoggedUser(): void {
    const userToken = localStorage.getItem('token');
    this._userStore.loggedUserData(userToken)
  }

  private buildAvatar(): void {
    this._userStoreSubs = this._userStore.loggedUserData$().subscribe( (user: UserModel) => {
      const firstName = user.firstName;
      const lastName = user.lastName;

      const firstNameLetter = firstName.slice(0,1);
      const lastNameLetter = lastName.slice(0,1);

      this.avatar = `${firstNameLetter}${lastNameLetter}`;
      this.fullName = `${firstName} ${lastName}`;
    })
  }

  public onLogout() {
    localStorage.removeItem('token');
    this._router.navigate(['account/login']);
  }
}
