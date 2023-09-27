import { Component } from '@angular/core';

@Component({
  selector: 'app-businesspages',
  templateUrl: './businesspages.component.html',
  styleUrls: ['./businesspages.component.css'],
})
export class BusinesspagesComponent {
  constructor() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
