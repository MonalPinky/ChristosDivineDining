import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  setSEOData(title: string, description: string) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: title, content: description });
  }
  constructor(private titleService: Title, private metaService: Meta) {
    this.setSEOData(
      'Christos divine dining',
      'Want  to elevate your events with divine catering?'
    );
  }
}
