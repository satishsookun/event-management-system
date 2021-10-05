import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../../features/authentication/models/user.model';

@Injectable()
export class UserStoreService {
  private _users$: BehaviorSubject<UserModel[]>;
  private _users: UserModel[];
  private _isUserExisted$: BehaviorSubject<UserModel[]>;
  private _loggedUserData$: BehaviorSubject<UserModel>;

  constructor() {
    this._users$ = new BehaviorSubject<UserModel[]>([]);
    this._isUserExisted$ = new BehaviorSubject<any>(null);
    this._loggedUserData$ = new BehaviorSubject<UserModel>(null);
  }

  public updateUserProfiles(users: UserModel[]) {
    localStorage.setItem('register', JSON.stringify(users));
    this._users = localStorage.getItem('register') ? JSON.parse(localStorage.getItem('register')) : [];
    this._users$.next(this._users);
  }

  public userProfiles$(): Observable<UserModel[]> {
    return this._users$.asObservable();
  }

  usersProfile(existedUsers: UserModel[]) {
    this._users$.next(existedUsers);
  }

  public loggedUserData(userData: UserModel): void {
    this._loggedUserData$.next(userData);
  }

  public loggedUserData$(): Observable<UserModel> {
    return this._loggedUserData$.asObservable();
  }
}
