import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  danger="text-danger";  //class binding
  iserror=false;   //true=red color and false= bydefault black color
   isspecial=true;
    
  
   mulclass = {
    'text-success' : !this.iserror, //false=green and ture=red
     'text-danger' : this.iserror,
     'text-special' : this.isspecial

   };
}
