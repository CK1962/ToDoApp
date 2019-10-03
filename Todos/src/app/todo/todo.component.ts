import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/services/todo.service';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title = "Todos";
  todoList: ITodo[] = [];
  todoTitle: string = "";
  todoId: number = 1;
  status: string = "";

  constructor(
    private activatedroute: ActivatedRoute,
    private TodoService: TodoService) { }

  ngOnInit() {
    this.todoList = this.TodoService.todoList;

    this.activatedroute.paramMap.subscribe(params => {
      this.status = params.get("status");
    });
  }
  get filteredArray(): ITodo[] {
    if (!this.status) {
      return this.TodoService.todoList;
    }
    else {
      return this.TodoService.todoList.filter(x =>
        this.status === "done" ? x.isDone : !x.isDone
      );
    }
  }
    // adds a todo to our list
    addTodo(): void {
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
      this.TodoService.add(todo);
      this.todoTitle = "";
    }

    // a method to delete an item
    deleteTodo(todo: ITodo) {
      this.TodoService.delete(todo);
    };
  }
