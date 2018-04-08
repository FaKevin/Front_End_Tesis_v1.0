import { Component, OnInit } from '@angular/core';
import { Gps } from '../model/gps';
import { GpsService } from '../services/gps.service';
import { Router } from '@angular/router';
import { LocalDataSource } from '../../ng2-smart-table';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})

export class HistorialComponent implements OnInit {

  source: LocalDataSource;
  Data=[];
  settings = {
    edit: {
      editButtonContent: '<i class="fas fa-eye"></i>',
      saveButtonContent: '<i class="fas fa-check"></i>',
      cancelButtonContent: '<i class="fas fa-times"></i>',
      confirmSave: true,
    },
    columns: {
      id: {
        title: 'id',
        editable : false,
        width: "40%"          
      },
      username: {
        title: 'username',
        editable : false,
        width: "30%"          
      },
      date: {
        title: 'Fecha',
        editable : false,
        width: "20%"
      },
      num: {
        title: 'Vuelta',
        editable : false,
        width: "10%"
      }
    },
      actions:{
        position :'right',
        add: false,
        delete: false
      },
      mode : 'external',
      pager:{
        perPage:15,
      }
  };
  
  constructor(private gpservice: GpsService,
    private router: Router) {  this.source = new LocalDataSource()}
  
  ngOnInit() {

    this.gpservice.getGpsList("admin")
    .subscribe(
      
      (response) => {   
        //console.log(response);  
        for(var i=0;i<response.data.length;i++){
          var fecha = new Date (String(response.data[i].date));
          var month = fecha.getMonth()+1;
          var fechac=fecha.getFullYear()+"/"+month+"/"+fecha.getDate();
          var post = {
            id : response.data[i]._id.toString(),
            username: response.data[i].username,
            date: fechac,
            num: response.data[i].num
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
     this.router.navigate(['historial',event.data.username]);     
  }
  
}

