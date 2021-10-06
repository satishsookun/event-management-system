import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class DialogService {

    private _dialogData$: BehaviorSubject<any>;
    private _dialogData: any = null;

    constructor() {
        this._dialogData$ = new BehaviorSubject<any>(this._dialogData);
    }

    public dialogData(dialogData: any) {
        this._dialogData = dialogData;
        this._dialogData$.next(this._dialogData);
    }

    public getDialogInfo$(): Observable<any> {
        return this._dialogData$.asObservable();
    }

    public resetDialog(){
        this.dialogData(null);
    }
}
