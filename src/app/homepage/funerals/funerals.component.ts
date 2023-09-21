import { Component } from '@angular/core';

@Component({
  selector: 'app-funerals',
  templateUrl: './funerals.component.html',
  styleUrls: ['./funerals.component.css'],
})
export class FuneralsComponent {
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
