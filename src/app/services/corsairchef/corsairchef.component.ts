import { Component } from '@angular/core';

@Component({
  selector: 'app-corsairchef',
  templateUrl: './corsairchef.component.html',
  styleUrls: ['./corsairchef.component.css'],
})
export class CorsairchefComponent {
  constructor() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
