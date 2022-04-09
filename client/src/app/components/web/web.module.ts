import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { MinProductCardComponent } from './home/min-product-card/min-product-card.component';
 import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
//import { SwiperModule } from 'swiper/angular';
import { TiendaComponent } from './tienda/tienda.component';
import { FiltrosComponent } from './tienda/filtros/filtros.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WebComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    MinProductCardComponent,
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
