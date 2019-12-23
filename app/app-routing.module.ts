import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListFormComponent} from './components/list-form/list-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'users',
    pathMatch:'full'
  },
  {
    path:'users',
    component: ListFormComponent
  },
  
  {
    path:'users/add',
    component: RegisterFormComponent
  },
  
  {
    path:'users/edit/:id',
    component: RegisterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
