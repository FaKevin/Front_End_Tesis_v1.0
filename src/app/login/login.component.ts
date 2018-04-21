import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username: '',
    password: ''
  };
  constructor(private authservice: AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  login(): void {
    this.authservice.login(this.credentials)
      .subscribe(
        (response) => {
          console.log('respuestaa: ',response);
          sessionStorage.removeItem('token');
          sessionStorage.setItem('token', response.token);
          this.router.navigate(['perfil']);  
        }, (error) => {
          console.log('error: ', error);
        }
      );    
  }

}
