import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { BookService, bookTypeOptions } from '@proxy/books';

const { required } = Validators;

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class CreateBookComponent {
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);
  private readonly bookService = inject(BookService);

  form: FormGroup;
  authors$ = this.bookService.getAuthorLookup().pipe(map(({ items }) => items));
  bookTypes = bookTypeOptions;

  private buildForm() {
    this.form = this.fb.group({
      authorId: [null, required],
      name: [null, required],
      type: [null, required],
      publishDate: [undefined, required],
      price: [null, required],
    });
  }

  constructor() {
    this.buildForm();
  }

  save() {
    if (this.form.invalid) return;

    this.bookService.create(this.form.value).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
