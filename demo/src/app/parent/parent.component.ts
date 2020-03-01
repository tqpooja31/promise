import { Component, OnInit } from '@angular/core';


@Component({
  
selector: 'app-parent',
 
 templateUrl: './parent.component.html',
  
styleUrls: ['./parent.component.css']

})

export class ParentComponent implements OnInit {
 
Present=0; Absent=0;

 
Students=['pooja','Amruta','gauri'];


parentm(val)

{
 
 val?this.Present++:this.Absent++;

}
 
 constructor() { }

 
 ngOnInit() {
  }


}
