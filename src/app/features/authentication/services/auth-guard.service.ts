import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor (
    private _authService: AuthService,
    private _router: Router
  ) {}

  canActivate(): boolean {
    if (!this._authService.isAuthenticated()) {
      console.log('Not authenticated');
      this._router.navigate(['account']);
      return false;
    }
    return true;
  }
}
