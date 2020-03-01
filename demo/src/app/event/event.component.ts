import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cols=2;
  fname:string="pooja";
  lname="kolape";
  age:number=24;
  gender="female";

  showdetails=false;

  toggle()
  {
    this.showdetails=!this.showdetails;
  }

}
