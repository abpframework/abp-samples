import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { SharedModule } from '../shared/shared.module';
import { BookDialogComponent } from './components/book-dialog/book-dialog.component';


@NgModule({
  declarations: [BookComponent, BookDialogComponent],
  imports: [
    BookRoutingModule,
    SharedModule
  ]
})
export class BookModule { }
