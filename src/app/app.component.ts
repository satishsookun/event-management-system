import {Component, OnInit} from '@angular/core';
import {RoutingService} from './shared/services/routing.service';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'ev-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private routingService: RoutingService,
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: RouterEvent) => {
      this.routingService.configByRoutes(event.url);
    });
  }

}
