import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'ev-login-action',
  templateUrl: './login-action.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginActionComponent {

  @Output() redirectToLogin: EventEmitter<void>;

  constructor() {
    this.redirectToLogin = new EventEmitter<void>()
  }

  public goToLogin(): void {
    this.redirectToLogin.emit();
  }
}
