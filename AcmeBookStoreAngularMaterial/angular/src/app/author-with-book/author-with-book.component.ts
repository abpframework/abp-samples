import { Component, OnInit } from '@angular/core';
import { BookService, CreateAuthorWithBookDto } from '@proxy/books';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bookTypeOptions } from '@proxy/acme/book-store/books';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ToasterService } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-author-with-book',
  templateUrl: './author-with-book.component.html',
  styleUrls: ['./author-with-book.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class AuthorWithBookComponent implements OnInit {

  form: FormGroup;

  bookTypes = bookTypeOptions;

  get bookFormArray(): FormArray {
    return this.form.get('books') as FormArray;
  }

  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private toasterService: ToasterService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      author: this.fb.group({
        name: [null, Validators.required],
        birthDate: [null, Validators.required]
      }),
      books: this.fb.array([this.getBookForm()])
      });
  }
  addBook(){
    (this.form.get('books') as FormArray).push(this.getBookForm());
  }

  getBookForm(){
    return this.fb.group({
      name: [null, Validators.required],
      type: [null, Validators.required],
      publishDate: [null, Validators.required],
      price: [null, Validators.required],
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }
    const authorWithBook: CreateAuthorWithBookDto = {
      ...this.form.value.author,
      books: this.form.value.books
    };
    this.bookService.createAuthorWithBooks(authorWithBook).subscribe((res) => {
      this.toasterService.success('::AuthorWithBook:Success', '', {messageLocalizationParams: [res.name]});
    });
  }

  deleteBook(i: number) {
    this.bookFormArray.removeAt(i);

  }
}
