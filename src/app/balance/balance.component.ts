import { Component, OnInit } from '@angular/core';

declare interface BalanceData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
    public tableData1: BalanceData;
    public tableData2: BalanceData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'Fecha', 'Hora', 'Linea', 'Pto Control', 'Monto (Bs)', 'Estado'],
          dataRows: [
              ['20/03/2018', '08:50', 'P', '2', '5', 'Deuda'],
              ['20/03/2018', '10:02', 'P', '4', '2', 'Deuda'],
              ['20/03/2018', '11:10', 'A', '6', '3', 'Deuda'],
              ['20/03/2018', '12:15', 'A', '8', '1', 'Deuda'],
              ['20/03/2018', '14:30', 'P', '2', '1', 'Deuda'],
              ['20/03/2018', '16:00', 'P', '1', '2', 'Deuda'],
          ]
      };
  }
}
