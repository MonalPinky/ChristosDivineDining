import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactService } from 'src/app/contact.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent {
  showMSG = false;
  number = 0;
  name = '';
  email = '';
  phonenumber = '';
  message = '';
  subject = '';
  optionchoice = '';
  msg;

  constructor(private http: HttpClient, private service: ContactService) {}

  Validate() {
    this.msg =
      'Name: ' +
      this.name +
      ' |\nEmail: ' +
      this.email +
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
      this.message != ''
    ) {
      console.log('MSG SEND');

      this.service.getData(this.msg);
      alert(
        'Your message has been sent we will come back to you as soon as possible'
      );
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
