import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-cookingclass',
  templateUrl: './cookingclass.component.html',
  styleUrls: ['./cookingclass.component.css'],
})
export class CookingclassComponent {
  setSEOData(title: string, description: string) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
  }
  constructor(private titleService: Title, private metaService: Meta) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.setSEOData(
      'Cooking Classes ',
      'Want to get information about our cooking classes'
    );
  }
}
