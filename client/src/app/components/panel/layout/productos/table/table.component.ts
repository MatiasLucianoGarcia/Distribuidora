import { Component, Input, OnInit } from '@angular/core';
import { Table } from '../../../../../helpers/table';
import { Producto, Variedad } from '../../../../../models/productos/producto';

@Component({
  selector: 'xeron-table-productos',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss', '../../../panel.component.scss']
})
export class TableComponent implements OnInit {
  @Input() productos: Array<Producto>;
  public keys: Array<string>;
  public table: Table<Producto>;

  constructor() { }

  ngOnInit(): void {
    this.table = new Table(this.productos, 10, 1);
    this.keys = ['nombre'];
  }
}

