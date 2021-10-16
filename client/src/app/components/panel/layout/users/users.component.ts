import { UserService } from './../../../../services/users/user.service';
import Status from './../../../../helpers/status';
import { User } from './../../../../models/users/user';
import { Component, OnInit } from '@angular/core';
import { ListaService } from './../../../../services/listas/lista.service';
import { Lista } from './../../../../models/listas/lista';

@Component({
  selector: 'xeron-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss', '../../panel.component.scss']
})
export class UsersComponent implements OnInit {
  public users: Array<User>;
  public listas: Array<Lista>;
  public status: Status;
  public statusLista: Status;


  constructor(
    protected _user: UserService,
    protected _lista: ListaService
  ) { }

  ngOnInit(): void {
    this.status = new Status();
    this.statusLista = new Status();
    this.getUsers();
    this.getListas();
  }

  getUsers(): void {
    this.status.setLoading();

    this._user.all(this._user.getToken()).subscribe({
      next: users => this.users = users,
      complete: () => this.status.setSuccess(),
      error: error => this.status.processError(error)
    });
  } 
  
  getListas(): void {
    this.statusLista.setLoading();

    this._lista.all().subscribe({
      next: listas => this.listas = listas,
      complete: () => this.statusLista.setSuccess(),
      error: error => this.statusLista.processError(error)
    });
  }

}
