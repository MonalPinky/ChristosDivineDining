import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private respones;
  private telegarurl =
    'https://api.telegram.org/bot' +
    environment.sendGridKey +
    '/sendMessage?chat_id=' +
    environment.chatgroup +
    '&text=';
  repos;
  errorMessage;
  loading;
  constructor(private http: HttpClient) {}
  getData(msg) {
    const req = this.http.get(this.telegarurl + msg);
    req.subscribe(
      (response) => {
        //Next callback
        console.log('response received');
        alert('Message sent we will get back to you as soon as possible');
        this.repos = response;
      },
      (error) => {
        //Error callback
        console.error('error caught in component');
        alert(
          'Something went wrong please try again or contact us sorry for the inconveniences'
        );

        this.errorMessage = error;
        this.loading = false;

        //throw error;   //You can also throw the error to a global error handler
      }
    );
  }
}
