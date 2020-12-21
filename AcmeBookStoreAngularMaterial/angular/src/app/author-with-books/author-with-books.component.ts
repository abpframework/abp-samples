import { Component, OnInit } from '@angular/core';
import { BookService, bookTypeOptions, CreateAuthorWithBookDto } from '@proxy/books';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ToasterService } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-author-with-book',
  templateUrl: './author-with-books.component.html',
  styleUrls: ['./author-with-books.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class AuthorWithBooksComponent implements OnInit {

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

  getBookForm(){
    return this.fb.group({
      name: [null, Validators.required],
      type: [null, Validators.required],
      publishDate: [null, Validators.required],
      price: [null, Validators.required],
    });
  }

  addBook(){
    this.bookFormArray.push(this.getBookForm());
  }

  deleteBook(i: number) {
    this.bookFormArray.removeAt(i);
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
}
