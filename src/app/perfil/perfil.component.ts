import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-ferfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  userlist: User[] = [];
  myUserService: UserService;

  constructor(userService: UserService) {
    this.myUserService = userService;
  }

  ngOnInit() {
    this.userlist = this.myUserService.getUserList();
  }

}
