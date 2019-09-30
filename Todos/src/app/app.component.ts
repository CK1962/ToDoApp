import { Component } from '@angular/core';
import { ITodo}

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

  ngOnInit() {
    this.todoId = 1;
    this.todoTitle = "";
    this.todoList = [
      // example of how to make an item in todo list
      {
        id: this.todoId,
        isDoing: false,
        isEditing: false,
        title: 'Install Angular CLI',
        isDone: false,
      dateAdded: new Date() }

    ];
  }
// adds a todo to our list
addTodo():void {
  this.todoId++;

  this.todoList.push({
    title: this.todoTitle,
    isDone: false,
    isDoing: false,
    isEditing: false,
    dateAdded: new Date()
  });
   // resets our todoTitle variable to an empty string
   this.todoTitle = "";
}

  // a method to delete an item
  deleteTodo(todo:any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  };
}
