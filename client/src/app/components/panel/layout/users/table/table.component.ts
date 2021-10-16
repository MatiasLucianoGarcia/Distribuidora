import { User } from './../../../../../models/users/user';
import { Table } from './../../../../../helpers/table';
import { Component, OnInit, Input } from '@angular/core';
import { Lista } from './../../../../../models/listas/lista';

@Component({
  selector: 'xeron-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss', '../../../panel.component.scss']
})
export class TableComponent implements OnInit {
  @Input() users: Array<User>;
  @Input() listas: Array<Lista>;
  public keys: Array<string>;
  public table: Table<User>;

  ngOnInit(): void {
    this.table = new Table(this.users, 10, 1);
    this.keys = ['nombre', 'email', 'role'];
  }

}
