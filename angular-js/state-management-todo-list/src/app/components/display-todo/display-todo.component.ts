import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Todo } from 'src/app/Entity/Todo';

@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css']
})
export class DisplayTodoComponent implements OnInit {
  todos: Todo[];
  constructor(private store: Store<{ todos: Todo[] }>) {
    store.pipe(select('todos')).subscribe((values) => {
      this.todos = values;
      console.log(values);
    })
  }

  ngOnInit(): void {
  }

}
