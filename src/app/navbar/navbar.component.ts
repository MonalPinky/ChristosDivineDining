import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isExtended = true;

  dropdown() {
    if (this.isExtended === false) {
      this.isExtended = true;
    } else {
      this.isExtended = false;
    }
  }
}
