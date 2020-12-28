import { NgModule } from '@angular/core';
import { AuthorWithBooksRoutingModule } from './author-with-books-routing.module';
import { AuthorWithBooksComponent } from './author-with-books.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AuthorWithBooksComponent],
  imports: [
    SharedModule,
    AuthorWithBooksRoutingModule
  ]
})
export class AuthorWithBooksModule { }
