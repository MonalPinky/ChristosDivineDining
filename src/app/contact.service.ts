import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private telegarurl =
    'https://api.telegram.org/bot' +
    environment.sendGridKey +
    '/sendMessage?chat_id=' +
    environment.chatgroup +
    '&text=';
  constructor(private http: HttpClient) {}
  getData(msg) {
    const req = this.http.get(this.telegarurl + msg);
    req.subscribe();
  }
}
