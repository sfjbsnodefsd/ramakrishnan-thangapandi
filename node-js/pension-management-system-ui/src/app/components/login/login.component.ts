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
  AddEmail(emailAddress: String) {
    const newEmail = new Todo();
    newEmail.email = emailAddress;
    this.store.dispatch(new EmailAdd(newEmail));
  }
  constructor(private store: Store<{ todos: Todo[] }>, private userService: UserService, private router: Router) { }
  login() {
    //this.router.navigateByUrl('pension-detail');
    const observables = this.userService.loginUser(this.user);
    //this.result="User has been added successfully";
    observables.subscribe(
      (response: any) => {
        this.AddEmail(this.user.email);
        this.router.navigateByUrl('pension-detail');
        //console.log(response);        
      }, function (error) {
        console.log(error);

      }
    );

  }
  ngOnInit(): void {
  }

}
