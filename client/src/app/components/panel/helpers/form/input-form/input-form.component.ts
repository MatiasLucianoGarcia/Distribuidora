import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'xeron-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent<T> implements DoCheck {
  @Input() name: string;
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() value: T | null = null;
  @Input() type: string = 'text';
  @Output() onChange: EventEmitter<T | null> = new EventEmitter();

  constructor() { }

  ngDoCheck(): void {
    this.onChange.emit(this.value);
  }

}