import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parties-home',
  templateUrl: './parties-home.component.html',
  styleUrls: ['./parties-home.component.css'],
})
export class PartiesHomeComponent {
  width = '';
  pronmptsize;
  tipconent = '';
  showInbeginin = true;
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

      this.tipconent = 'Click me!';
      this.fontsize = '20px';
      this.centretext = 'center';
      // this.pronmptsize = '100px';
      // this.showInbeginin = false;
    } else {
      // false for not mobile device
      this.width = '9cm';
      this.tipconent = 'Hover over me!';
      this.centretext = 'Right';
    }
    // this.showInbeginin = false;
  }
}
