import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-corsairchef',
  templateUrl: './corsairchef.component.html',
  styleUrls: ['./corsairchef.component.css'],
})
export class CorsairchefComponent {
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
      'Corsair Chef  ',
      'Want to get information about our corsiar chef/Private chef?'
    );
  }
}
