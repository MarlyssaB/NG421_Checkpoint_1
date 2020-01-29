import { Component, OnInit, ViewChild } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { TodoService } from '../services/todo.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todotable',
  templateUrl: './todotable.component.html',
  styleUrls: ['./todotable.component.css']
})

export class TodotableComponent implements OnInit {
  displayedColumns: string[] = ['title', 'description','status','createdAt'];
  dataSource: MatTableDataSource<ITodo>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.dataSource= new MatTableDataSource(this.todoService.ToDoList);
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string){
    this.dataSource.filter=filterValue.trim().toLowerCase();

  }
}
