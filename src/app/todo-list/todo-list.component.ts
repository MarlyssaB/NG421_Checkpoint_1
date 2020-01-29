import { Component, OnInit, Input } from '@angular/core';
import {ITodo} from '../interfaces/itodo';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent implements OnInit {
  @Input() status: string

  get todoList() {
    return this.todoService.getTodos(this.status);
  }
  constructor(private todoService : TodoService) { }

  ngOnInit() {
    
  }

}
