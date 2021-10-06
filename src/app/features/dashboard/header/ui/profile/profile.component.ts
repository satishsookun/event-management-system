import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ev-profile',
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProfileComponent {

  @Input() avatar: string;
  @Input() fullName: string;

  @Output() emitLogout: EventEmitter<void>;

  constructor() {
    this.emitLogout = new EventEmitter<void>();
  }

  public onLogout(): void {
    this.emitLogout.emit();
  }
}
