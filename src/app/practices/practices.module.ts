import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';
import { Compo3Component } from './compo3/compo3.component';
import { PracticesRoutingModule } from './practices-routing.module';
import { BrodCartService } from '../brod-cart.service';



@NgModule({
  declarations: [
    Compo1Component,
    Compo2Component,
    Compo3Component
  ],
  imports: [
    CommonModule,
    PracticesRoutingModule
  ],providers:[]
})
export class PracticesModule { }

