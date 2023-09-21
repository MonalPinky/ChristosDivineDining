import { Component } from '@angular/core';

@Component({
  selector: 'app-corsairs-chefhome',
  templateUrl: './corsairs-chefhome.component.html',
  styleUrls: ['./corsairs-chefhome.component.css'],
})
export class CorsairsChefhomeComponent {
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
