import {Injectable} from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  constructor() {}

  public isAuthenticated(): boolean {
    const authToken = localStorage.getItem('token');
    const helper = new JwtHelperService();
    // Check whether the token is expired and return
    // true or false
    return !helper.isTokenExpired(authToken ? authToken : '');
  }
}
