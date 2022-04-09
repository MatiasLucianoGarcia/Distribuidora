import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'xeron-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {
  @Input() filtros: Filtro[] = [
    {
      title: 'Categorias',
      opciones: [{ key: '1', value: 'Lapices' }, { key: '3', value: 'Cartucheras' }],
    },
    {
      title: 'Otro filtro',
      opciones: [{ key: '3', value: 'filtro 1' }, { key: '3', value: 'filtro 3' }],
    }
  ];

  public filter: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // filtrar productos por nombre o codigo
  filtrar(): void {

  }


}


export interface Filtro {
  title: string,
  opciones: { key: string, value: string }[];
  selected?: string;
}