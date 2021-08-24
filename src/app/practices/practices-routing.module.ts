import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';
import { Compo3Component } from './compo3/compo3.component';

const routes: Routes = [
  {
    path:'',component:Compo1Component
  },
  {
    path:'comp1',component:Compo1Component
  },
  {
    path:'comp2',component:Compo2Component
  },
  {
    path:'comp3',component:Compo3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticesRoutingModule { }
