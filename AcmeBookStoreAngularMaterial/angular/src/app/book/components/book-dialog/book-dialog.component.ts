import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorLookupDto, BookDto, BookService, bookTypeOptions } from '@proxy/books';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss'],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, width: '50vw' }}
  ]
})
export class BookDialogComponent implements OnInit {

  form: FormGroup;

  bookTypes = bookTypeOptions;

  authors$: Observable<AuthorLookupDto[]>;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: BookDto,
    bookService: BookService,
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
      publishDate: [this.data?.publishDate ? new Date(this.data?.publishDate) : null, Validators.required],
      price: [this.data?.price, Validators.required],
      authorId: [this.data?.authorId, Validators.required]
    });
  }

  getFormValue() {
    const {publishDate} = this.form.value;
    return {
      ...this.form.value,
      publishDate: `${publishDate?.getFullYear()}-${publishDate?.getMonth() + 1}-${publishDate?.getDate()}`
    };
  }

}
