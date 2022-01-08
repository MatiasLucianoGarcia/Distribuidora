import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { type, Variedad } from '../../models/productos/producto';
import { ApiService } from '../config/api.service';

@Injectable({
  providedIn: 'root'
})
export class VariedadesService {
  public url: string = 'variedad';
  public token: string;

  constructor(
    private _api: ApiService
  ) { }

  all(): Observable<Variedad[]> {
    return this._api.get(this.url);
  }

  insert(producto: Variedad, token: string): Observable<any> {
    return this._api.post(this.url, producto, token);
  }

  update(producto: Variedad, token: string): Observable<any> {
    return this._api.put(this.url, producto, token);
  }

  delete(id: number, token: string): Observable<any> {
    return this._api.del(`${this.url}/${id}`, token);
  }

  dummy(): Variedad {
    return new Variedad(0, '', '', null, '', 0, 0, type.product);
  }

}
