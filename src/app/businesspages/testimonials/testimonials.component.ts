import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
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
      'Testimonials ',
      'what do the people say about centurion catering company christos divine dining?'
    );
  }
}
