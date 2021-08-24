import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Compo4Component } from './compo4/compo4.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MyGuardGuard } from './my-guard.guard';

const routes: Routes = [
  {
    path:'',component:FeedbackComponent
  },
  {
    path:'practices',canActivate:[MyGuardGuard],
    loadChildren:()=>import('./practices/practices.module').then((m)=>m.PracticesModule)
  },
  {
    path:'comp4',component:Compo4Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
