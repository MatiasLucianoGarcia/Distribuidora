import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CategoriasService } from '../../../../../services/productos/categorias.service';
import Status from '../../../../../helpers/status';
import { Categoria } from '../../../../../models/productos/categoria';
import { UserService } from '../../../../../services/users/user.service';

@Component({
  selector: 'xeron-delete-categoria',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;
  @Input() categoria: Categoria;
  @Output() updateTable: EventEmitter<Categoria> = new EventEmitter();
  public status: Status;

  constructor(
    private _categoria: CategoriasService,
    private _user: UserService
  ) {
    this.status = new Status();
  }

  ngOnInit(): void { }

  confirmar($e): void {
    this.status.setLoading();
    const token = this._user.getToken();
    this._categoria.delete(this.categoria.id, token).subscribe({
      next: categoria => this.updateTable.emit(this.categoria),
      complete: () => this.closebutton.nativeElement.click(),
      error: error => this.status.processError(error)
    });
  }
}
