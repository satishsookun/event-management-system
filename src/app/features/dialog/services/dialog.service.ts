import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {Subject} from 'rxjs';

@Injectable()
export class DialogService {

    private _dialogData$: Subject<any>;
    private _dialogData: any = null;

    constructor() {
        this._dialogData$ = new Subject<any>();
    }

    public dialogData(dialogData: any) {
        this._dialogData = dialogData;
        this._dialogData$.next(this._dialogData);
    }

    public getDialogInfo$(): Observable<any> {
        return this._dialogData$.asObservable();
    }

}
