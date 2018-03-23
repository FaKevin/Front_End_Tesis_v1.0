import { Component, OnInit } from '@angular/core';
import { Ticket } from '../model/ticket';
import { TicketService } from '../services/ticket.service';
import { Router } from '@angular/router';
import { LocalDataSource } from '../../ng2-smart-table';

declare interface BalanceData {
}

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  source: LocalDataSource;
  Data=[];
  settings = {
      columns: {
       
        date: {
          title: 'Fecha',
          editable : false          
        },
        num: {
          title: 'nVuelta',
          editable : false
        },
        hour: {
          title: 'Hora',
          editable : false
        },
        nstop: {
          title: 'nParada',
          editable : false
        },
        cash: {
          title: 'Monto',
          editable : false
        },
        debt: {
          title: 'Estado',
          editable : false
        }
      }
  };


  constructor(private ticketservice: TicketService,
    private router: Router) {  this.source = new LocalDataSource()}

  ngOnInit() {
    
    this.ticketservice.getTicketList("admin","2018/03/30","2018/01/30")
      .subscribe(
        (response) => {     
          for(var i=0;i<response.data.length;i++){
            for(var j=0;j<response.data[i].schedule.length;j++)
            {
              var fecha = new Date (String(response.data[i].date));
              //var hora = new Date(String(response.data[i].schedule[j].hour));
              //console.log(hora);          toLocaleTimeString();
              var post = {
                date: fecha.toLocaleDateString(),
                num: response.data[i].num,
                hour: response.data[i].schedule[j].hour,
                nstop:response.data[i].schedule[j].nstop,
                cash:response.data[i].schedule[j].cash,
                debt:response.data[i].schedule[j].debt,
              }
              this.Data.push(post);
            }
          }
          console.log(this.Data);
          this.source.load(this.Data);
        }, (error) => {
          console.log('Error: ', error);
        }
      );
  }
}
