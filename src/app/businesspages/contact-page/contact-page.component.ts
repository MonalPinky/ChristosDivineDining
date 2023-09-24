import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactService } from 'src/app/contact.service';

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

  // constructor(private http: HttpClient, private emailService: EmailService) {}
  constructor(private contact: ContactService) {}

  // https://www.simplilearn.com/tutorials/angular-tutorial/what-is-angular-node#prerequisites
  //Email api
  SendData() {
    this.msg =
      'Name: ' +
      this.name +
      '\nEmail: ' +
      this.email +
      '\nSubject: ' +
      this.subject +
      '\nmessage: ' +
      this.message;
    console.log(this.msg);
    this.contact.sendEmail(this.msg).subscribe(
      () => {
        alert('Email sent successfully!');
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
      },
      (error) => {
        console.error('Error sending email:', error);
        alert('Error sending email. Please try again later.');
      }
    );
  }

  ///Gets data for subject
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
