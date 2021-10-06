import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserStoreService} from '../../../shared/services/user-store.service';

@Component({
  selector: 'ev-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DashboardComponent implements OnInit {

  constructor(
    private _userStore: UserStoreService,
  ) {}

  ngOnInit(): void {
    this.userStore();
  }

  private userStore(): void {
    let existedUsers = localStorage.getItem('register') ? JSON.parse(localStorage.getItem('register') as any) : [];
    this._userStore.usersProfile(existedUsers);
  }
}
