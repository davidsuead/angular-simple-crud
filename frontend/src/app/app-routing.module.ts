import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { PeopleCrudComponent } from './components/views/people-crud/people-crud.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"people",
    component: PeopleCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
