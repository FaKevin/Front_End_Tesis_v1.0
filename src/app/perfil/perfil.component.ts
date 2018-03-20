import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-ferfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
  username: string="admin";
  userViewed: User = {
    name: "",
    lastname: "",
    username: "",
    f_create:"",
    birth: "",
    state: "",
    city: "",
    address: "",
    telephone: "",
    cellphone:"",
    brand: "",
    year: "",
    model:"",
    car_plate: ""
  };

  constructor(
    private activateroute: ActivatedRoute,
    private userservice: UserService) {}

  ngOnInit() {
    this.userservice.getUserByUsername(this.username)
    .subscribe(
      (response) => {
        this.userViewed = response.data;
      }, (error) => {
        console.log('Error: ', error);
      }
    );

   }
}
