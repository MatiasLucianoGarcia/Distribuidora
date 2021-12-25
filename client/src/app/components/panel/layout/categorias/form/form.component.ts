import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import Status from '../../../../../helpers/status';
import { CategoriasService } from 'src/app/services/productos/categorias.service';
import { Categoria } from '../../../../../models/productos/categoria';
import { Data } from '../../../helpers/form/custom-form/custom-form.component';
import { UserService } from '../../../../../services/users/user.service';

@Component({
  selector: 'xeron-form-categoria',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() categoria: Categoria;
  @Input() title: string;
  @Output() updateTable: EventEmitter<Categoria> = new EventEmitter();
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;
  public myCategoria: Categoria;
  public status: Status;
  public modalKey: string;


  constructor(
    protected _categoria: CategoriasService,
    protected _user: UserService
  ) {
    this.status = new Status();
  }

  ngOnInit(): void {
    this.myCategoria = (this.categoria === undefined) ? this._categoria.dummy() : { ...this.categoria };
    this.modalKey = 'modalCategoria-' + this.myCategoria.id;
  }

  confirmar = (): void => {
    (this.myCategoria.id === 0) ? this.insert() : this.update();
  }

  private insert(): void {
    this.status.setLoading();
    const token = this._user.getToken();
    this._categoria.insert(this.myCategoria, token).subscribe({
      next: categoria => {
        this.closebutton.nativeElement.click();
        this.categoria = this._categoria.dummy();
        this.myCategoria = this._categoria.dummy();
        this.updateTable.emit(categoria);
      },
      complete: () => this.status.setSuccess(),
      error: error => this.status.processError(error)
    });
  }

  private update(): void {
    this.status.setLoading();
    const token = this._user.getToken();
    this._categoria.update(this.myCategoria, token).subscribe({
      next: categoria => {
        this.closebutton.nativeElement.click();
        this.categoria = categoria;
        this.myCategoria = { ...this.categoria };
        this.updateTable.emit(this.categoria);
      },
      complete: () => this.status.setSuccess(),
      error: error => this.status.processError(error)
    });
  }
}
