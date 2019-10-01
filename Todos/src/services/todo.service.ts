import { Injectable } from '@angular/core';
import { ITodo } from 'src/app/interfaces/itodo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: ITodo[] = [];

  constructor() { }

  getTodoItems()
  {
    return this.todoList;
  }

    add(todo: ITodo) {
    this.todoList.push(todo);
  }

  delete(todo: ITodo) {
    const index = this.todoList.indexOf(todo, 0);
    this.todoList.splice(index,1);
  }
}
