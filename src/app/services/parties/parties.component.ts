import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css'],
})
export class PartiesComponent {
  setSEOData(title: string, description: string) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: title, content: description });
  }
  constructor(private titleService: Title, private metaService: Meta) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.setSEOData(
      'Party Catering',
      'Want to get information about our party catering'
    );
  }
}
