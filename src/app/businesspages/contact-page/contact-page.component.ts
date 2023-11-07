import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactService } from 'src/app/contact.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment.development';
import { Title, Meta } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent {
  setSEOData(title: string, description: string) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({
      name: 'Contact us',
      content:
        'want to get a quote or learn more about centurion catering company christos divine dining ',
    });
  }
  showMSG = false;
  number = 0;
  name = '';
  email = '';
  phonenumber = '';
  message = '';
  subject = '';
  optionchoice = '';
  msg;
  city = '';
  constructor(
    private http: HttpClient,
    private service: ContactService,
    private titleService: Title,
    private metaService: Meta
  ) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.setSEOData(
      'Contact',
      'Want to get a quote for any function you can think of?'
    );
  }

  Validate() {
    this.msg =
      'Name: ' +
      this.name +
      ' |\nEmail: ' +
      this.email +
      ' |\nPhoneNumber: ' +
      this.phonenumber +
      ' |\nCity: ' +
      this.city +
      ' |\nSubject: ' +
      this.subject +
      ' |\nmessage: ' +
      this.message;
    console.log(this.msg);

    if (
      this.name != '' &&
      this.email != '' &&
      this.phonenumber != '' &&
      this.subject != '' &&
      this.message != '' &&
      this.city != ''
    ) {
      console.log('MSG SEND');

      this.service.getData(this.msg);

      this.name = '';
      this.email = '';
      this.phonenumber = '';
      this.subject = '';
      this.message = '';
    }
  }

  onSelected(contact) {
    this.subject = contact;
  }

  optionValidation() {
    if (this.optionchoice === 'Subject*') {
      alert('Please select a Subject');
    }
  }
  //To show we don't copy email
  showmsg() {
    // alert(this.number);

    if (this.number == 0) {
      if (this.showMSG == true) {
        this.showMSG = false;
        // alert(this.number);
        this.number = this.number + 1;
      } else {
        this.showMSG = true;
        this.number = this.number + 1;
      }
    }
  }
}
