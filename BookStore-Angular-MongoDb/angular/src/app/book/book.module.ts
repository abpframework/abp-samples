import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateBookComponent } from './create-book/create-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

@NgModule({
  declarations: [BookComponent, CreateBookComponent, EditBookComponent],
  imports: [
    BookRoutingModule,
    SharedModule,
    NgbDatepickerModule,
  ]
})
export class BookModule { }
