import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) {}

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
    const saveData = {
      email: 'duplooyzak2@gmail.com',
    };

    this.http
      .post<{ message: string }>(
        'http://192.168.3.101:4200/subscribe/',
        saveData
      )
      .subscribe((respaanse) => {
        console.log(respaanse.message);
      });
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
