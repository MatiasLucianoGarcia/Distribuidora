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
import { AboutUsComponent } from './about-us/about-us.component';
//import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    WebComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    MinProductCardComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    NgxUsefulSwiperModule,
    WebRoutingModule
  ]
})
export class WebModule { }
