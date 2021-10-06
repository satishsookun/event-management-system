import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'ev-events',
  templateUrl: './events.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EventsComponent {

  constructor() {}

}
