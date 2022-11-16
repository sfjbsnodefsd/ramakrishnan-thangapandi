import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ProcessPensionComponent } from './components/process-pension/process-pension.component';
import { PensionDetailComponent } from './components/pension-detail/pension-detail.component';
import { LogoutComponent } from './components/logout/logout.component';
import { EmailReducer } from './reducers/email.reducer';
import { EmailSessionComponent } from './components/email-session/email-session.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    ProcessPensionComponent,
    PensionDetailComponent,
    LogoutComponent,
    EmailSessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule
    //,StoreModule.forRoot({ todos: EmailReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
