import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'xeron-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Images: Array<object> = [
    {
      src: 'https://loremflickr.com/g/600/400/paris',
      alt: 'Image 1',
    }, {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      alt: 'Image 2'
    }, {
      src: 'https://loremflickr.com/600/400/paris,girl/all',
      alt: 'Image 3'
    }, {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      alt: 'Image 4'
    }, {
      src: 'https://loremflickr.com/600/400/paris,girl/all',
      alt: 'Image 5'
    }, {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      alt: 'Image 6'
    }
  ]

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    slidesPerView:3,
    slidesPerGroup:3,
    loop:true,
    loopFillGroupWithBlank:true,
    scrollbar:{draggable:true}
  };

  constructor() { }

  ngOnInit(): void {
  }

}
