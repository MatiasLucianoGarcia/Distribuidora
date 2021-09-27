import { Component, OnInit , ViewChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'xeron-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbarToggler') navbarToggler:ElementRef;
  

  constructor() { }

  ngOnInit(): void {
  }

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }
  
  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }

  replaceUrl(url){
    //return this._productService.replaceUrl(url);
  }

}
