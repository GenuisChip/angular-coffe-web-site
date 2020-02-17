import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    AOS.init();
  }

  backToTop(){
    let scrollToTop = setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 30); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 5);
  }

}
