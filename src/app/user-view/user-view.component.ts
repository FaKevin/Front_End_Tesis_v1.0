import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
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
    private userservice: UserService,private router: Router) { }

  ngOnInit() {
    this.activateroute.params.subscribe(
      (paramss) => {
        this.userservice.getUserByUsername(paramss.username)
        .subscribe(
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
      },
      (error)=>{
        console.log('Error init:', error)
      }
    );
  }
  editUser(username): void {
    this.router.navigate(['users',this.userViewed.username,'edit']);
    }
  deleteUser(username): void {
    this.userservice.deleteUser(this.userViewed.username).subscribe((response)=>{console.log(response)},
    (error)=>{console.log('Error init:', error)});
    this.router.navigate(['users']);
   // this.router.navigate(['users',this.userViewed.username,'edit']);
    }

}
