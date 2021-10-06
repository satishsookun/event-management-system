import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'ev-event',
  templateUrl: './event.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EventComponent implements OnInit, OnDestroy {

  constructor () {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
