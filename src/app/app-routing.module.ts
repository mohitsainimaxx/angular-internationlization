import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {
    path:'',component:FeedbackComponent
  },
  {
    path:'practices',
    loadChildren:()=>import('./practices/practices.module').then((m)=>m.PracticesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
