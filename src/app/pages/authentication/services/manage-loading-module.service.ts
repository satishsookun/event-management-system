import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class ManageLoadingModuleService {

  private _hasRegistered$: BehaviorSubject<boolean>;

  constructor() {
    this._hasRegistered$ = new BehaviorSubject<boolean>(false);
    this.isRegisteredOnce();
  }

  private isRegisteredOnce(): void {
    const userStore = JSON.parse(localStorage.getItem('register') as any);
    const hasUserRegistered = !!userStore;

    this._hasRegistered$.next(hasUserRegistered);
  }

  public isRegisteredOnce$(): Observable<boolean> {
    return this._hasRegistered$.asObservable();
  }
}
