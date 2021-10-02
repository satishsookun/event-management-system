import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'rs-authentication',
  templateUrl: './authentication.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuthenticationComponent {

  constructor() {}
}
