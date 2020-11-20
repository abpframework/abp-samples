import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { SharedModule } from '../shared/shared.module';
import { BookDialogComponent } from './components/book-dialog/book-dialog.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';


@NgModule({
  declarations: [BookComponent, BookDialogComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule,
  ],
  exports: [SharedModule],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, width: "50vw" }}
  ]
})
export class BookModule { }
