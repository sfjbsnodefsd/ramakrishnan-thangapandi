import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/entity/Todo';
import { EmailAdd } from 'src/app/session/email.actions';

@Component({
  selector: 'app-email-session',
  templateUrl: './email-session.component.html',
  styleUrls: ['./email-session.component.css']
})
export class EmailSessionComponent implements OnInit {
  AddTodo(emailAddress: string) {
    const newEmail = new Todo();
    newEmail.email = emailAddress;
    this.store.dispatch(new EmailAdd(newEmail));
  }
  constructor(private store: Store<{ todos: Todo[] }>) { }

  ngOnInit(): void {
  }

}
