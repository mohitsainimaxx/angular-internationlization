import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Compo1Component } from './compo1/compo1.component';

const routes: Routes = [
  {
    path:'',component:Compo1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticesRoutingModule { }
