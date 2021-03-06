import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { LocalDataSource } from '../../ng2-smart-table';


@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  source: LocalDataSource;
  Data=[];
  settings = {
    edit: {
      editButtonContent: '<i class="fas fa-eye"></i>',
      saveButtonContent: '<i class="fas fa-check"></i>',
      cancelButtonContent: '<i class="fas fa-times"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="fas fa-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      namec: {
        title: 'Nombre Completo',
        editable : false,
        width: "27%"          
      },
      username: {
        title: 'username',
        editable : false,
        width: "12%"          
      },
      cellphone: {
        title: 'Celular',
        editable : false,
        width: "12%"
      },
      telephone: {
        title: 'Telefono',
        editable : false,
        width: "12%"
      },
      car_plate: {
        title: 'Placa',
        editable : false,
        width: "12%" 
      },
      car: {
        title: 'Automovil',
        editable : false,
        width: "25%" 
      },
    },
      actions:{
        position :'right',
        add: false
      },
      mode : 'external',
      pager:{
        perPage:15,
      }
  };

  constructor(private userservice: UserService,
    private router: Router) {  this.source = new LocalDataSource()}

  ngOnInit() {
    
    this.userservice.getUserList()
      .subscribe(
        (response) => {     
          for(var i=0;i<response.data.length;i++){
            var post = {
              namec : response.data[i].name + " "+ response.data[i].lastname,
              username: response.data[i].username,
              cellphone: response.data[i].cellphone,
              telephone: response.data[i].telephone,
              car_plate:response.data[i].car_plate,
              car:response.data[i].brand+" "+response.data[i].year+" "+response.data[i].model
            }
            this.Data.push(post);
          }
         // console.log(this.Data);
          this.source.load(this.Data);
        }, (error) => {
          console.log('Error: ', error);
        }
      );
  }
 
  Edit(event) {
   // console.log('llego aca: ',event.data);
    this.router.navigate(['users',event.data.username,'view']);     
  }
}
