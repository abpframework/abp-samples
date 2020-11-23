import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AuthorLookupDto, BookDto, BookService } from '@proxy/books';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bookTypeOptions } from '@proxy/acme/book-store/books';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss'],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, width: "50vw" }}
  ]
})
export class BookDialogComponent implements OnInit{

  form: FormGroup;

  bookTypes = bookTypeOptions;

  authors$: Observable<AuthorLookupDto[]>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: BookDto,
    bookService: BookService,
    private fb: FormBuilder
  ) {
    this.authors$ = bookService.getAuthorLookup().pipe(map((r) => r.items));
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      name: [this.data?.name, Validators.required],
      type: [this.data?.type, Validators.required],
      publishDate: [this.data?.publishDate, Validators.required],
      price: [this.data?.price, Validators.required],
      authorId: [this.data?.authorId, Validators.required]
    });
  }

}
