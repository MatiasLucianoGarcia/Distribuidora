import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'xeron-button-edit',
  templateUrl: './button-edit.component.html',
  styleUrls: ['./button-edit.component.scss']
})
export class ButtonEditComponent  {
  @Input() key:string;
}
