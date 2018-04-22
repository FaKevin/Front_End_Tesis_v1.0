import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Gps } from '../model/gps';
import { HttpHeaders } from '@angular/common/http';

const userApiUrl = 'http://localhost:3000/gps';

@Injectable()
export class GpsService {

  myHttpClient: HttpClient;

  constructor(httpclient: HttpClient) {
    this.myHttpClient = httpclient;
  }

  getGpsList(username: string): Observable<any> {
    const http_Headers = {
      headers: new HttpHeaders({
        'username': username,
      })
    };
    return this.myHttpClient.get(`${userApiUrl}/list`,http_Headers);
  }

  getGpsDay(username: string,date:string): Observable<any> {
    console.log('service',username);
    console.log('service',date);
    const http_Headers = {
      headers: new HttpHeaders({
        'username': username,
        'ddate':date
      })
    };
    return this.myHttpClient.get(`${userApiUrl}/list/day`,http_Headers);
  }

}
