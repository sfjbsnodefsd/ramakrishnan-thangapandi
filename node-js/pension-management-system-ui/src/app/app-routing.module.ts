import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PensionDetailComponent } from './components/pension-detail/pension-detail.component';
import { ProcessPensionComponent } from './components/process-pension/process-pension.component';

const routes: Routes = [{ path: "login", component: LoginComponent },
{ path: "pension-process", component: ProcessPensionComponent },
{ path: "pension-detail", component: PensionDetailComponent },
{ path: "logout", component: LogoutComponent },
{ path: "login/success", component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
