import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../../services/productos/productos.service';
import { VariedadesService } from '../../../../services/productos/variedades.service';
import Status from '../../../../helpers/status';
import { Producto, Variedad } from '../../../../models/productos/producto';

@Component({
  selector: 'xeron-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss', '../../panel.component.scss']
})
export class ProductosComponent implements OnInit {
  public productos: Array<Producto>;
  public status: Status;


  constructor(
    protected _productos: ProductosService,
    protected _variedades: VariedadesService
  ) { }

  ngOnInit(): void {
    this.status = new Status();
    this.getProductos();
  }

  getProductos(): void {
    this.status.setLoading();

    this._productos.allOnly().subscribe({
      next: productos => this.productos = productos,
      complete: () => this.status.setSuccess(),
      error: error => this.status.processError(error)
    });
  }

}
