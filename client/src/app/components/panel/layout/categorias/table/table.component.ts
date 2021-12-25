import { Component, Input, OnInit } from '@angular/core';
import { Table } from '../../../../../helpers/table';
import { Categoria } from '../../../../../models/productos/categoria';

@Component({
  selector: 'xeron-categorias-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss', '../../../panel.component.scss']
})
export class TableComponent implements OnInit {
  @Input() categorias: Array<Categoria>;
  public keys: Array<string>;
  public table: Table<Categoria>;

  constructor() { }

  ngOnInit(): void {
    this.table = new Table(this.categorias, 10, 1);
    this.keys = ['nombre'];
  }

}
