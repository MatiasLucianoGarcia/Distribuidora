import { Component, Input, OnInit } from '@angular/core';
import { GLOBAL } from '../../../../../helpers/global';
import { Producto } from '../../../../../models/productos/producto';

@Component({
  selector: 'xeron-info-producto',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() producto: Producto;
  public urlStorage: string;

  constructor() { }

  ngOnInit(): void {
    this.urlStorage = GLOBAL.storage;
  }

}
