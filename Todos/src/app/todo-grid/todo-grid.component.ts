import { Component, OnInit, ViewChild } from '@angular/core';
import { ITodo} from '../interfaces/itodo';
import { TodoService } from 'src/services/todo.service';
import {MatTable} from '@angular/material';

@Component({
  selector: 'app-todo-grid',
  templateUrl: './todo-grid.component.html',
  styleUrls: ['./todo-grid.component.css']
})
export class TodoGridComponent implements OnInit {

  constructor(private todoService : TodoService) {}

  todos: ITodo[] = this.todoService.getAll();
  columnsToDisplay: String[] = ["title", 'isDone', 'isEditing'];
  @ViewChild(MatTable, {static: true}) table: MatTable<ITodo>;

  ngOnInit() {
  }

}
