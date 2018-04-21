import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ViewCell } from '../../ng2-smart-table';

@Component({
  selector: 'button-view',
  templateUrl: './button-view.component.html',
  styleUrls: ['./button-view.component.css']
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();
  constructor(private userservice: UserService,
    private router: Router) {}

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  viewProfile() {
   // this.save.emit(this.rowData);
   this.router.navigate(['users',this.rowData.username,'view']);  
  }
  viewGps() {
  //  this.save.emit(this.rowData);
    console.log(this.rowData.namec);
  }
  deleteProfile(){
    //this.save.emit(this.rowData);
    
    console.log(this.rowData.cellphone);
    this.userservice.deleteUser(this.rowData.username).subscribe((response)=>{console.log(response)},
    (error)=>{console.log('Error init:', error)})
  }
}
