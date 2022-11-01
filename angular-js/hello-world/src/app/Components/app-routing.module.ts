import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { HomeComponent } from './home/home.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

const routes: Routes = [{path:"",component:HomeComponent},
{path:"register",component:UserFormComponent}
,{path:"registered",component:RegisteredUsersComponent},
{path:"pipe",component:PipeDemoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
