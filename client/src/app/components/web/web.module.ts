import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TiendaComponent } from './tienda/tienda.component';
import { FiltrosComponent } from './tienda/filtros/filtros.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WebComponent,
    HeaderComponent,
    FooterComponent,
    TiendaComponent,
    FiltrosComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    FormsModule
  ]
})
export class WebModule { }
