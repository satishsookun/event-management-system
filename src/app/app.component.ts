import {Component, OnInit} from '@angular/core';
import {RoutingService} from './shared/services/routing.service';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {filter} from 'rxjs/operators';
import {AuthService} from './features/authentication/auth/auth.service';

@Component({
  selector: 'ev-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(
    private _router: Router,
    private _routingService: RoutingService,
    private _authService: AuthService,
  ) {}

  ngOnInit(): void {
    this._router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: RouterEvent) => {
      this._routingService.configByRoutes(event.url);
    });

    this.checkUserLoginStatus();
  }

  private checkUserLoginStatus(): void {
    const getUserToken = localStorage.getItem('token');

    this._authService.setUserLoginToken(!!getUserToken);
  }

}
