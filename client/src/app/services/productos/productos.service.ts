import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto, type, Variedad } from '../../models/productos/producto';
import { ApiService } from '../config/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  public url: string = 'producto';
  public token: string;

  constructor(
    private _api: ApiService
  ) { }

  all(): Observable<Producto[]> {
    return this._api.get(`${this.url}/only`);
  }

  allOnly(): Observable<Producto[]> {
    return this._api.get(`${this.url}`);
  }

  insert(producto: Producto, token: string): Observable<any> {
    return this._api.post(this.url, producto, token);
  }

  update(producto: Producto, token: string): Observable<any> {
    return this._api.put(this.url, producto, token);
  }

  delete(id: number, token: string): Observable<any> {
    return this._api.del(`${this.url}/${id}`, token);
  }

  dummy(): Producto {
    return new Producto(0, '', '', [], type.products);
  }

}
