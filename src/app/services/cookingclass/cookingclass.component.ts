import { Component } from '@angular/core';

@Component({
  selector: 'app-cookingclass',
  templateUrl: './cookingclass.component.html',
  styleUrls: ['./cookingclass.component.css'],
})
export class CookingclassComponent {
  constructor() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
