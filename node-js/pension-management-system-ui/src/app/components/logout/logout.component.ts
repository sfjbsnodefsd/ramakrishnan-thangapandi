import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { select, Store } from '@ngrx/store';
import { Todo } from 'src/app/entity/Todo';
import { EmailRemove } from 'src/app/session/email.actions';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  //todos: Todo[];
  removeTodo() {
    this.store.dispatch(new EmailRemove(0));
  }

  constructor(private userService: UserService, private store: Store<{ todos: Todo[] }>) {
    store.pipe(select('todos')).subscribe((values) => {
      //this.todos = values;
      console.log(values);
    })
  }

  logout() {
    this.userService.logoutUser();
  }
  ngOnInit(): void {

  }

}
