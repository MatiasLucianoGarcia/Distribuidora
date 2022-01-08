import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import Status from '../../../../../helpers/status';
import { Producto } from '../../../../../models/productos/producto';
import { ProductosService } from '../../../../../services/productos/productos.service';
import { UserService } from '../../../../../services/users/user.service';

@Component({
  selector: 'xeron-form-producto',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() producto: Producto;
  @Input() title: string;
  @Output() updateTable: EventEmitter<Producto> = new EventEmitter();
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;
  public myProducto: Producto;
  public status: Status;
  public modalKey: string;


  constructor(
    protected _producto: ProductosService,
    protected _user: UserService
  ) {
    this.status = new Status();
  }

  ngOnInit(): void {
    this.myProducto = (this.producto === undefined) ? this._producto.dummy() : { ...this.producto };
    this.modalKey = 'modalProducto-' + this.myProducto.id;
  }

  confirmar = (): void => {
    (this.myProducto.id === 0) ? this.insert() : this.update();
  }

  private insert(): void {
    this.status.setLoading();
    const token = this._user.getToken();
    this._producto.insert(this.myProducto, token).subscribe({
      next: producto => {
        this.closebutton.nativeElement.click();
        this.producto = this._producto.dummy();
        this.myProducto = this._producto.dummy();
        this.updateTable.emit(producto);
      },
      complete: () => this.status.setSuccess(),
      error: error => this.status.processError(error)
    });
  }

  private update(): void {
    this.status.setLoading();
    const token = this._user.getToken();
    this._producto.update(this.myProducto, token).subscribe({
      next: producto => {
        this.closebutton.nativeElement.click();
        this.producto = producto;
        this.myProducto = { ...this.producto };
        this.updateTable.emit(this.producto);
      },
      complete: () => this.status.setSuccess(),
      error: error => this.status.processError(error)
    });
  }
}
