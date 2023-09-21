import { Component } from '@angular/core';

@Component({
  selector: 'app-parties-home',
  templateUrl: './parties-home.component.html',
  styleUrls: ['./parties-home.component.css'],
})
export class PartiesHomeComponent {
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
