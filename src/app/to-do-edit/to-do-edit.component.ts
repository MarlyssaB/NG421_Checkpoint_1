import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {ITodo} from '../interfaces/itodo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './to-do-edit.component.html',
  styleUrls: ['./to-do-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  newDescription;
  modalInstance: NgbModalRef;

  constructor() { }
  
  ngOnInit() { }

  yes(){
   this.modalInstance.close(this.newDescription);
 }
 
}