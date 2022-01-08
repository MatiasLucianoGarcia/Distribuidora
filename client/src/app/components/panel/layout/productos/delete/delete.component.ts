import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import Status from '../../../../../helpers/status';
import { Producto } from '../../../../../models/productos/producto';
import { ProductosService } from '../../../../../services/productos/productos.service';
import { UserService } from '../../../../../services/users/user.service';

@Component({
  selector: 'xeron-delete-producto',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;
  @Input() producto: Producto;
  @Output() updateTable: EventEmitter<Producto> = new EventEmitter();
  public status: Status;

  constructor(
    private _producto: ProductosService,
    private _user: UserService
  ) {
    this.status = new Status();
  }

  ngOnInit(): void { }

  confirmar($e): void {
    this.status.setLoading();
    const token = this._user.getToken();
    this._producto.delete(this.producto.id, token).subscribe({
      next: producto => this.updateTable.emit(this.producto),
      complete: () => this.closebutton.nativeElement.click(),
      error: error => this.status.processError(error)
    });
  }
}
