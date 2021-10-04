import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'ev-create-action',
  templateUrl: './create-action.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateActionComponent {

  @Output() redirectToCreate: EventEmitter<void>;

  constructor() {
    this.redirectToCreate = new EventEmitter<void>()
  }

  public goToCreate(): void {
    this.redirectToCreate.emit();
  }

}
