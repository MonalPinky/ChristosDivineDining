import { Component } from '@angular/core';

@Component({
  selector: 'app-corporate-home',
  templateUrl: './corporate-home.component.html',
  styleUrls: ['./corporate-home.component.css'],
})
export class CorporateHomeComponent {
  width = '';
  constructor() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // true for mobile device
      this.width = '20%';
    } else {
      // false for not mobile device
      this.width = '7cm';
    }
  }
}
