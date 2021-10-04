import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../../features/authentication/models/user.model';

@Injectable()
export class UserStoreService {
  private _users$: BehaviorSubject<UserModel[]>;
  private _users: UserModel[];
  private _isUserExisted$: BehaviorSubject<UserModel[]>;

  constructor() {
    this._users$ = new BehaviorSubject<UserModel[]>([]);
    this._isUserExisted$ = new BehaviorSubject<any>(null);
  }

  public userProfiles(users: UserModel[]) {
    this._users = users;
    this._users$.next(users);
  }

  public userProfiles$(): Observable<UserModel[]> {
    return this._users$.asObservable();
  }

}
