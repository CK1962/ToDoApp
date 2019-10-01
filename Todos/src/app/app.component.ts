import { Component } from '@angular/core';
import { ITodo} from './interfaces/itodo';
import { TodoService } from 'src/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = "Todos";
  todoList: ITodo [] = [];
  todoTitle: string;
  todoId: number;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoId = 1;
    this.todoTitle = "";
    this.todoList = this.todoService.getTodoItems();
    this.todoList.push({
        id: this.todoId,
        isDoing: false,
        isEditing: false,
        title: 'Install Angular CLI',
        isDone: false,
      dateAdded: new Date() }

    );
  }
// adds a todo to our list
addTodo():void {
  this.todoId++;
  const todo = {
    id: this.todoId,
    title: this.todoTitle,
    isDone: false,
    isDoing: false,
    isEditing: false,
    dateAdded: new Date()
  };
   // resets our todoTitle variable to an empty string
   this.todoService.add(todo);
   this.todoTitle = "";
}

  // a method to delete an item
  deleteTodo(todo:ITodo) {
   this.todoService.delete(todo);
  };
}
