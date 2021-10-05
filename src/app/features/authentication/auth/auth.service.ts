import {Injectable} from '@angular/core';
import {LoginUserType, UserModel} from '../models/user.model';
import {Observable, of} from 'rxjs';

@Injectable()
export class AuthService {

  private _isLoggedIn: boolean;
  private _userUuid: string;

  constructor() {}

  public login(userLog: LoginUserType, users: UserModel[]): Observable<UserModel> {
    const isUserNameMatched = users
      .find( (user: UserModel) => user.userName === userLog.userName);

    const isPasswordMatched = users
      .find( (user: UserModel) => user.password === userLog.password);
    const loggedUser = (isUserNameMatched && isPasswordMatched);
    this._userUuid = loggedUser.uuid;
    this._isLoggedIn = (!!isUserNameMatched && !!isPasswordMatched);
    return of(isUserNameMatched && isPasswordMatched)
  }

  public isUserLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  public loggedUserUuid(): string {
    return this._userUuid;
  }

  public logoutUser(): void{
    this._isLoggedIn = false;
  }

}
