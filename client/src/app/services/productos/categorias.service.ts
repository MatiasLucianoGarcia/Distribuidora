import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../../models/productos/categoria';
import { ApiService } from '../config/api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  public url: string = 'categorias';
  public token: string;

  constructor(
    private _api: ApiService
  ) { }

  all(): Observable<Categoria[]> {
    return this._api.get(this.url);
  }

  insert(categoria: Categoria, token: string): Observable<any> {
    return this._api.post(this.url, categoria, token);
  }

  update(categoria: Categoria, token: string): Observable<any> {
    return this._api.put(this.url, categoria, token);
  }

  delete(id: number, token: string): Observable<any> {
    return this._api.del(`${this.url}/${id}`, token);
  }

  dummy(): Categoria {
    return new Categoria(0, '');
  }

}
