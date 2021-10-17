import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import Status from './../../../../../helpers/status';

export interface Data {
  key: string,
  input?: any; //InputForm;
  select?: any; //selectForm;
}

interface InputType {
  required: boolean;
  name: string;
}

class InputForm implements InputType {
  required: boolean;
  name: string;
  placeholder: string;
  value: any;
  type?: string = 'text';
}

class selectForm implements  InputType {
  required: boolean;
  name: string;
  key?: string;
  options: Array<any>
  select: any
}

@Component({
  selector: 'xeron-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent<T> implements OnInit {
  @Input() object: T;
  @Input() primaryKey: string;
  @Input() inputs: Data[] = [];
  @Input() title: string;
  @Input() status: Status;
  @Output() onConfirm: EventEmitter<void> = new EventEmitter();
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log(this.inputs[0].input.value)
  }  

  confirmar() {
    this.onConfirm.emit();
  }
  
}

