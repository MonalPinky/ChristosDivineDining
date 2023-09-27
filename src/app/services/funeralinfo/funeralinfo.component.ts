import { Component } from '@angular/core';

@Component({
  selector: 'app-funeralinfo',
  templateUrl: './funeralinfo.component.html',
  styleUrls: ['./funeralinfo.component.css'],
})
export class FuneralinfoComponent {
  constructor() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
