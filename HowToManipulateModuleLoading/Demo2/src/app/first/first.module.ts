import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers:[],
  bootstrap:[FirstComponent]
})
export class FirstModule { }
