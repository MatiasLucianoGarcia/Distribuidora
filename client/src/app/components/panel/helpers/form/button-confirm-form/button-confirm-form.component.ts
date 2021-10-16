import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'xeron-button-confirm-form',
  templateUrl: './button-confirm-form.component.html',
  styleUrls: ['./button-confirm-form.component.scss']
})
export class ButtonConfirmFormComponent {
  @Input() loading: boolean;
  @Output() onConfirm: EventEmitter<void> = new EventEmitter();

  confirmar() {
    this.onConfirm.emit();
  }

}
