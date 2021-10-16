import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lista } from 'src/app/models/listas/lista';
import { ApiService } from '../config/api.service';
import { LocalService } from '../storage/local.service';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  public url: string = 'lista/';
  public token: string;

  constructor(
    private _api: ApiService
  ) { }

  all(): Observable<Lista[]> {
    return this._api.get(this.url);
  }

  dummy(): Lista {
    return new Lista(0, '');
  }

}
