import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  danger="text-danger";  //class binding
  iserror=false;   //true=red color and false= bydefault black color
   isspecial=true;
    
   
       highlight='yellow';

       mulstyle={
         color : 'grey',
         fontStyle : 'italic'
       };
}
