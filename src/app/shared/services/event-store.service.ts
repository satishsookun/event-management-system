import {Injectable} from '@angular/core';
import {UserStoreService} from './user-store.service';

@Injectable()
export class EventStoreService {

  constructor(
    private _userStore: UserStoreService,
  ) {}

  public initEventStore(): void {
    const registeredUsers = localStorage.getItem('register');

  }
}
