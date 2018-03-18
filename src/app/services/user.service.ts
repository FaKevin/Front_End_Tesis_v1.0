import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';

@Injectable()
export class UserService {
  userlist: User[] = [];

  private myHttpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.myHttpClient = httpClient;
  }
  public getUserList(): User[] {
    this.userlist.push({
      name: "Cinthia Vanessa",
      lastname: "Merida Lafuente",
      birth: "1995/2/22",
      state: "Cochabamba",
      city: "Quillacollo",
      address: "Rafael Pavon entre Rene Crespo y Ricotoro n140",
      telephone: "4361298",
      cellphone: "74767450",
      brand: "Toyota",
      year: "2003",
      model:"vagoneta negra",
      car_plate:"xxxxxxx",
      f_create: "12/04/2018"
    });
    return this.userlist;
  }
}
