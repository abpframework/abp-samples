import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import { ToasterService } from "@abp/ng.theme.shared";
import { TodoItemDto } from "@proxy/services/dtos";
import { TodoService } from "@proxy/services";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [FormsModule]
})

export class HomeComponent implements OnInit {

  todoItems: TodoItemDto[];
  newTodoText: string;
  readonly todoService = inject(TodoService);
  readonly toasterService = inject(ToasterService);

  ngOnInit(): void {
    this.todoService.getList().subscribe(response => {
      this.todoItems = response;
    });
  }

  create(): void{
    this.todoService.create(this.newTodoText).subscribe((result) => {
      this.todoItems = this.todoItems.concat(result);
      this.newTodoText = null;
    });
  }

  delete(id: string): void {
    this.todoService.delete(id).subscribe(() => {
      this.todoItems = this.todoItems.filter(item => item.id !== id);
      this.toasterService.info('Deleted the todo item.');
    });
  }
}
