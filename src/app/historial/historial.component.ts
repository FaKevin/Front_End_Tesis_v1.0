import { Component, NgZone, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Gps } from '../model/gps';
import { GpsService } from '../services/gps.service';
import { LocalDataSource } from '../../ng2-smart-table';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})

export class HistorialComponent implements OnInit {
 //public polylines: Array<any>;
  polylines=[];
  username: string="admin";
  info:boolean=false;
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
  
  constructor(private gpservice: GpsService,private router: Router) 
  { 
    this.source = new LocalDataSource()}
  
  ngOnInit() {
    
    /*this.polyline = [
      {
          latitude:  39.8282,
          longitude: -98.5795,
          speed: 50
      },
       {
          latitude:  38.8282,
          longitude: -108.5795,
          speed: 50
      },
      {
          latitude: 37.772,
          longitude: -122.214,
          speed: 20
      },
      {
          latitude: 21.291,
          longitude: -157.821,
           speed: 20
      },
      {
          latitude: -18.142,
          longitude: 178.431,
          speed: 20
      },
      {
          latitude: -27.467,
          longitude: 153.027,
          speed: 25
      }
    ];*/



    this.gpservice.getGpsList(this.username).subscribe(
      (response) => {   
        //console.log(response);  
          var fechaf:Date;
          var fecha: Date;
          var fechaff:string;
          var fechaa:string;
          var month=0;
          var fechac:string="";
          var length=response.data.length-1;
         // console.log('length: ',length)
        for(var i=0;i<response.data.length;i++){
          fecha = new Date (String(response.data[i].date));
          month = fecha.getMonth()+1;
          fechac=fecha.getFullYear()+"/"+month+"/"+fecha.getDate();
          if(i<length){   
            fechaa = fecha.toLocaleDateString();
            fechaf = new Date (String(response.data[i+1].date));
            fechaff = fechaf.toLocaleDateString();
            //console.log("i",i," :",fechaa);
            //console.log("i",i," :",fechaff);
            if(fechaa!==fechaff)
            {
              var post = {
                id : response.data[i]._id.toString(),
                username: response.data[i].username,
                date: fechac,
                num: response.data[i].num
              }
              this.Data.push(post);
            }
          }
          if(i==length){
            var post = {
              id : response.data[i]._id.toString(),
              username: response.data[i].username,
              date: fechac,
              num: response.data[i].num
            }
            this.Data.push(post);
          }
        }
       // console.log(this.Data);
        this.source.load(this.Data);
      }, (error) => {
        console.log('Error: ', error);
      }
    );
  }
  Edit(event) {    
    this.gpservice.getGpsDay(this.username,event.data.date).subscribe(
      (response)=>{
        console.log(response);
        for(var i=0;i<response.data.length;i++)
        {
          this.polylines.push(response.data[i].location);
        }
      },(error)=>{console.log('Error: ', error);
      event.confirm.reject();}
    )
    console.log('polilynes: ',this.polylines);
    this.info=true;   
  }
  
}

