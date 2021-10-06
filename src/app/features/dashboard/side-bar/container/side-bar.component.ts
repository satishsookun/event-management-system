import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'ev-side-bar',
  templateUrl: './side-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SideBarComponent {

  constructor () {}
}
