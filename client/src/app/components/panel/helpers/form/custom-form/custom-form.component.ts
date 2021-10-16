import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'xeron-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent<T> implements OnInit {
  @Input() object: T;
  @Input() primayKey: string;
  @Input() key: string;
  @Input() inputs: Data<T>[] = [];
  @Input() title: string;
  @Output() updateTable: EventEmitter<T> = new EventEmitter();
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}

interface Data<T> {
  key: string,
  input: InputForm<T> | InputForm<T>;
}

interface InputType<T> {
  required: boolean;
  name: string;
}

interface InputForm<T> extends InputType<T> {
  placeholder: string;
  value: T
}

interface InputForm<T> extends InputType<T> {
  options: Array<T>
  select: T
}
