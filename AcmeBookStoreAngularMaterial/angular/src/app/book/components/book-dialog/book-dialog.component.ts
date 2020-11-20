import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bookTypeOptions } from '@proxy/acme/book-store/books';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookDto } from '@proxy/books';


@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss'],
  providers: [
  ]
})
export class BookDialogComponent implements OnInit{
  form: FormGroup; // add this line

  // add bookTypes as a list of BookType enum members
  bookTypes = bookTypeOptions;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: BookDto
  ) { }

  ngOnInit() {
    this.buildForm();

  }

  buildForm() {
    this.form = this.fb.group({
      name: [this.data?.name, Validators.required],
      type: [this.data?.type, Validators.required],
      publishDate: [this.data?.publishDate, Validators.required],
      price: [this.data?.price, Validators.required],
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }
  }
}
