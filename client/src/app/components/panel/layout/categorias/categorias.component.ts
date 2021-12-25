import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../../../services/productos/categorias.service';
import Status from '../../../../helpers/status';
import { Categoria } from '../../../../models/productos/categoria';

@Component({
  selector: 'xeron-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss', '../../panel.component.scss']
})
export class CategoriasComponent implements OnInit {
  public categorias: Array<Categoria>;
  public status: Status;


  constructor(
    protected _categoria: CategoriasService
  ) { }

  ngOnInit(): void {
    this.status = new Status();
    this.getCategorias();
  }

  getCategorias(): void {
    this.status.setLoading();

    this._categoria.all().subscribe({
      next: categorias => this.categorias = categorias,
      complete: () => this.status.setSuccess(),
      error: error => this.status.processError(error)
    });
  } 
  

}
