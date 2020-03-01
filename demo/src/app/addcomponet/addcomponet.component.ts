import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addcomponet',
  templateUrl: './addcomponet.component.html',
  styleUrls: ['./addcomponet.component.css']
})
export class AddcomponetComponent implements OnInit {
person:FormGroup
  constructor() { }

  ngOnInit() {
    this.person=new FormGroup({
      name:new FormControl('', Validators.required),
      email:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required),
      mobno:new FormControl('', Validators.required)
     });
  }

}
