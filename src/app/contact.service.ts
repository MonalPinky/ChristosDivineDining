import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private sendGridApiKey = environment.sendGridKey;

  constructor(private http: HttpClient) {}

  sendEmail(formData: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.sendGridApiKey}`,
      'Content-Type': 'application/json',
    });

    const emailData = {
      personalizations: [
        {
          to: [{ email: 'duplooyzak2@gmail.com' }],
          subject: 'New Contact Us Form Submission',
        },
      ],
      from: { email: '578282@student.belgiumcampus.ac.za' },
      content: [{ type: 'text/plain', value: formData.message }],
    };

    return this.http.post('https://api.sendgrid.com/v3/mail/send', emailData, {
      headers,
    });
  }
}
