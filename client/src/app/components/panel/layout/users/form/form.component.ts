import { UserService } from './../../../../../services/users/user.service';
import { User } from './../../../../../models/users/user';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import Status from './../../../../../helpers/status';
import { Lista } from './../../../../../models/listas/lista';
import { Data } from '../../../helpers/form/custom-form/custom-form.component';

@Component({
  selector: 'xeron-form-user',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() user: User;
  @Input() title: string;
  @Input() listas: Array<Lista>;
  @Output() updateTable: EventEmitter<User> = new EventEmitter();
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;
  public myUser: User;
  public status: Status;
  public inputs: Data[];
  public modalKey: string;


  constructor(
    protected _user: UserService
  ) {
    this.status = new Status();
  }

  ngOnInit(): void {
    this.myUser = (this.user === undefined) ? this._user.dummy() : { ...this.user };
    this.modalKey = 'modalUser-' + this.myUser.id;
    this.inputs = [
      {
        key: 'nombre',
        input: {
          required: true,
          name: 'Nombre',
          placeholder: 'Ingrese el nombre',
          value: this.myUser.nombre + ''
        }
      },
      {
        key: 'email',
        input: {
          required: true,
          name: 'E-mail',
          placeholder: 'E-mail del usuario',
          value: this.myUser.email
        }
      },
      {
        key: 'role',
        select: {
          required: true,
          name: 'Rol',
          options: ['admin', 'cliente'],
          select: this.myUser.role
        }
      },
      {
        key: 'lista',
        select: {
          required: true,
          name: 'Lista',
          key: 'nombre',
          options: this.listas,
          select: this.myUser.lista
        }
      },
      {
        key: 'password',
        input: {
          required: true,
          name: 'Password',
          placeholder: 'Contraseña del usuario',
          value: this.myUser.password,
          type: 'password'
        }
      },
    ]
  }

  confirmar = (): void => {
    console.log(this.myUser);
    (this.myUser.id === 0) ? this.insert() : this.update();
  }

  private insert(): void {
    this.status.setLoading();
    const token = this._user.getToken();
    this._user.insert(this.myUser, token).subscribe({
      next: user => {
        this.closebutton.nativeElement.click();
        this.user = this._user.dummy();
        this.myUser = this._user.dummy();
        this.updateTable.emit(user);
      },
      complete: () => this.status.setSuccess(),
      error: error => this.status.processError(error)
    });
  }

  private update(): void {
    this.status.setLoading();
    const token = this._user.getToken();
    this._user.update(this.myUser, token).subscribe({
      next: user => {
        this.closebutton.nativeElement.click();
        this.user = user;
        this.myUser = { ...this.user };
        this.updateTable.emit(this.user);
      },
      complete: () => this.status.setSuccess(),
      error: error => this.status.processError(error)
    });
  }
}
