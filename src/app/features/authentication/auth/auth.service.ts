import {Injectable} from '@angular/core';
import {LoginUserType, UserModel} from '../models/user.model';
import {Observable, of} from 'rxjs';

@Injectable()
export class AuthService {

  private _isLoggedIn: boolean;

  constructor() {}

  public login(userLog: LoginUserType, users: UserModel[]): Observable<UserModel> {
    const isUserMatched = users
      .find( (user: UserModel) => (user.userName === userLog.userName) && user.password === userLog.password);

    this._isLoggedIn = (!!isUserMatched);
    return of(isUserMatched)
  }

  public setUserLoginToken(isLogged: boolean) {
    this._isLoggedIn = isLogged;
  }

  public isUserLoggedIn(): boolean {
    return this._isLoggedIn;
  }

}
