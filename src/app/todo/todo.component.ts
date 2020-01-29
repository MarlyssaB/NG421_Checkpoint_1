import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { TodoEditComponent } from '../to-do-edit/to-do-edit.component';
import { ITodo } from '../interfaces/itodo';
import { async } from 'rxjs/internal/scheduler/async';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo:ITodo

  editsTodo:ITodo;

  constructor(private todoService: TodoService, private modalService: NgbModal) { }
  todoTitle = ''
 
  ngOnInit() {
  }

  async deleteTodo(todo) {
    let result;
    const modal = this.modalService.open(ConfirmationModalComponent);
    modal.componentInstance.modalInstance = modal;
    try {
      result = await modal.result;
      if (result === "yes") {
        this.todoService.deleteTodo(todo);
      }
    }
    catch (ex) {

    }

  }
  async editTodo(todo){
    const modal = this.modalService.open(TodoEditComponent);
    modal.componentInstance.modalInstance=modal;
    
    try {
      let result = await modal.result;
      this.todo.description = result;
    }
    catch(ex){
      
    }
}


}
