import { Component, Input } from '@angular/core';

@Component({
  selector: 'xeron-errors-form',
  templateUrl: './errors-form.component.html',
  styleUrls: ['./errors-form.component.scss']
})
export class ErrorsFormComponent {
  @Input() show: boolean = false;
  @Input() errors: string[] = [];
}
