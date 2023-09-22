import { Component } from '@angular/core';

@Component({
  selector: 'app-corporate-home',
  templateUrl: './corporate-home.component.html',
  styleUrls: ['./corporate-home.component.css'],
})
export class CorporateHomeComponent {
  width = '';
  fontsize;
  centretext;
  constructor() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // true for mobile device
      this.width = '7cm';
      this.centretext = 'center';
      this.fontsize = '20px';
    } else {
      // false for not mobile device
      this.width = '9cm';
      this.centretext = 'right';
    }
  }
}
