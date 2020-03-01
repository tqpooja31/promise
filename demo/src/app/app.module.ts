import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule}     from  '@angular/forms'

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StyleComponent } from './style/style.component';
import { EventComponent } from './event/event.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AddcomponetComponent } from './addcomponet/addcomponet.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StyleComponent,
    EventComponent,
    ParentComponent,
    ChildComponent,
    AddcomponetComponent
  ],
  imports: [
    BrowserModule,FormsModule, BrowserAnimationsModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
