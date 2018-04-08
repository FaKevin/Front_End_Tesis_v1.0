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
  username: string="vane";
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
    this.userservice.getUserByUsername(this.username).subscribe(
      (response) => {
        var f_create = new Date (String(response.data.f_create));
        var month = f_create.getMonth()+1;
        response.data.f_create =f_create.getFullYear()+"/"+month+"/"+f_create.getDate();
        var birth = new Date (String(response.data.birth));
        month = birth.getMonth()+1;
        response.data.birth = birth.getFullYear()+"/"+month+"/"+birth.getDate();
        this.userViewed = response.data;
      }, (error) => {
        console.log('Error: ', error);
      }
    );

   }
}
