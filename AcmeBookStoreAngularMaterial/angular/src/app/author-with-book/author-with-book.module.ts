import { NgModule } from '@angular/core';

import { AuthorWithBookRoutingModule } from './author-with-book-routing.module';
import { AuthorWithBookComponent } from './author-with-book.component';
import { MatStepperModule } from '@angular/material/stepper';
import { BookModule } from '../book/book.module';
import { AuthorModule } from '../author/author.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AuthorWithBookComponent],
  imports: [
    SharedModule,
    AuthorWithBookRoutingModule,
    MatStepperModule,
    BookModule,
    AuthorModule
  ]
})
export class AuthorWithBookModule { }
