import { Component } from '@angular/core';

@Component({
  selector: 'app-cooking-classess-home',
  templateUrl: './cooking-classess-home.component.html',
  styleUrls: ['./cooking-classess-home.component.css'],
})
export class CookingClassessHomeComponent {
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
