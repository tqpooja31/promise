import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';



@Component({
 
 selector: 'app-child',
 
 templateUrl: './child.component.html',
  
styleUrls: ['./child.component.css']

})

export class ChildComponent implements OnInit {

 
 constructor() { }

 
 ngOnInit() {
  }
   

  @Input() name;
  

  isdisabled=false;

 
 @Output() Attendance=new EventEmitter();

 
 change(value)
  {
   
 this.isdisabled=true;
   
 this.Attendance.emit(value);
  
}

}

