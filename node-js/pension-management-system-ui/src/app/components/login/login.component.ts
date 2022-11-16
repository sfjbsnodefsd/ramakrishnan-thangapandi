import { Component, OnInit } from '@angular/core';
import User from 'src/app/entity/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/entity/Todo';
import { EmailAdd } from 'src/app/session/email.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  //result="";
  // AddEmail(emailAddress: string) {
  //   const newEmail = new Todo();
  //   newEmail.email = emailAddress;
  //   this.store.dispatch(new EmailAdd(newEmail));
  // }
  constructor( private userService: UserService, private router: Router) { }
  login() {
    //this.router.navigateByUrl('pension-detail');
    const loginObservables = this.userService.loginUser(this.user);
     loginObservables.subscribe(
      (response: any) => {
        localStorage.setItem('userToken', response.token);
        this.router.navigate([''])
        //this.router.navigateByUrl('pension-detail');
      },
      (httpErrorResponse: any) => {
        console.log("Error occured during login" + JSON.stringify(httpErrorResponse));
        //alert(httpErrorResponse.error);
      }

    );
  }
  ngOnInit(): void {
  }

}
