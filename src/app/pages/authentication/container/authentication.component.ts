import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {RoutingService} from '../../../shared/services/routing.service';
import {UserStoreService} from '../../../shared/services/user-store.service';
import {UserModel} from '../../../features/authentication/models/user.model';

@Component({
  selector: 'rs-authentication',
  templateUrl: './authentication.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuthenticationComponent implements OnInit, OnDestroy {
  private _isProfileCreated: boolean;
  private _userStoreSubs?: Subscription;

  public isCreateModuleLoaded: boolean;

  constructor(
    private _router: Router,
    private _userStore: UserStoreService,
    private _routingService: RoutingService,
  ) {
    this._isProfileCreated = false;
    this.isCreateModuleLoaded = false;
  }

  ngOnInit(): void {
    this.userStore();
    this.manageRedirectUrl();
    this.loadModuleByUrl();
  }

  private userStore(): void {
    let existedUsers = localStorage.getItem('register') ? JSON.parse(localStorage.getItem('register') as any) : [];
    this._userStore.userProfiles(existedUsers);
  }

  ngOnDestroy(): void {
    if (this._userStoreSubs) this._userStoreSubs.unsubscribe();
  }

  private manageRedirectUrl() {
    this._userStoreSubs = this._userStore.userProfiles$().subscribe(
      (users: UserModel[]) => {
        const loginUrl = 'account/login';
        const createUrl = 'account/create';
        const redirectUrl = users.length > 0 ? loginUrl : createUrl;
        this._router.navigate([redirectUrl]);
      }
    );
  }

  private loadModuleByUrl(): void {
    this._routingService.currentUrl$().subscribe( (url: string) => {
      const createUrl = '/account/create';
      this.isCreateModuleLoaded = !!(url === createUrl);
    })
  }

  public redirectToLogin(): void {
    this._router.navigate(['account/login']);
  }

  public redirectToCreate(): void {
    this._router.navigate(['account/create']);
  }
}
