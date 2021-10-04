import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class RoutingService {

  private _url$: BehaviorSubject<string>;

  constructor() {
    this._url$ = new BehaviorSubject<string>('');
  }

  public configByRoutes(url: string) {
    this._url$.next(url)
  }

  public currentUrl$(): Observable<string> {
    return this._url$.asObservable();
  }

}
