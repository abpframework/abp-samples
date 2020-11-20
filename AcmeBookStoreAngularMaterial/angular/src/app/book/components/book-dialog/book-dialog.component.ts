import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bookTypeOptions } from '@proxy/acme/book-store/books';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AuthorLookupDto, BookDto, BookService } from '@proxy/books';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss'],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, width: "50vw" }}
  ]
})
export class BookDialogComponent implements OnInit{
  form: FormGroup; // add this line

  // add bookTypes as a list of BookType enum members
  bookTypes = bookTypeOptions;

  authors$: Observable<AuthorLookupDto[]>;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: BookDto,
    bookService: BookService
  ) {
      this.authors$ = bookService.getAuthorLookup().pipe(map((r) => r.items));
  }

  ngOnInit() {
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

  save() {
    if (this.form.invalid) {
      return;
    }
  }
}
