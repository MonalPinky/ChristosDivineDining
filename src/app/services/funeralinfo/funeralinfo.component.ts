import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-funeralinfo',
  templateUrl: './funeralinfo.component.html',
  styleUrls: ['./funeralinfo.component.css'],
})
export class FuneralinfoComponent {
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
      'Funeral Catering ',
      'Want to get information about our funeral Catering?'
    );
  }
}
