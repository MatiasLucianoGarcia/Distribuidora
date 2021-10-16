import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'xeron-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.scss']
})
export class SelectFormComponent<T> implements DoCheck {
  @Input() name: string;
  @Input() required: boolean = false;
  @Input() options: Array<T>;
  @Input() key: string = null;
  @Input() select: T | null = null;
  @Output() onSelect: EventEmitter<T | null> = new EventEmitter();

  constructor() { }

  ngDoCheck(): void {
    this.onSelect.emit(this.select);
  }


}
