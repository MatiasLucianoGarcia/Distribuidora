import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebComponent } from './web.component';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children:[
      {path:'', component:HomeComponent},
      {path:'inicio', component:HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
