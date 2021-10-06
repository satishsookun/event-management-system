import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'ev-logo',
  templateUrl: './logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent {

  @Input() classes: string;
}
