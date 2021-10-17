import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'xeron-button-create',
  templateUrl: './button-create.component.html',
  styleUrls: ['./button-create.component.scss']
})
export class ButtonCreateComponent {
  @Input() key:string;
  @Input() title:string;
}
