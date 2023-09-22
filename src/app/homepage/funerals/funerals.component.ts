import { Component } from '@angular/core';

@Component({
  selector: 'app-funerals',
  templateUrl: './funerals.component.html',
  styleUrls: ['./funerals.component.css'],
})
export class FuneralsComponent {
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

      this.fontsize = '20px';
      this.centretext = 'centre';
    } else {
      // false for not mobile device
      this.width = '9cm';
      this.centretext = 'left';
    }
  }
}
