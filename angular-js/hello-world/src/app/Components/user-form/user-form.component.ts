import { Component, OnInit } from '@angular/core';
import User from 'src/app/Entity/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  title = "Fill out the form below";
  result="";
  user: User = new User();
  constructor(private userService: UserService) { }
  save() {
    const observables = this.userService.saveUser(this.user);
    this.result="User has been added successfully";
    this.user=new User();
    observables.subscribe(
      (response: any) => {
        console.log(response);        
      }, function (error) {
        console.log(error);
        this.result=error;
      }
    );
  }

  ngOnInit(): void {
  }

}
