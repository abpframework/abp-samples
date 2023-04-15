import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter, map, switchMap, tap } from 'rxjs';
import { NgbDateNativeAdapter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { BookDto, BookService, bookTypeOptions } from '@proxy/books';

const { required } = Validators;

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class EditBookComponent {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly fb = inject(FormBuilder);
  private readonly bookService = inject(BookService);

  id: string;
  form: FormGroup;
  authors$ = this.bookService.getAuthorLookup().pipe(map(({ items }) => items));
  bookTypes = bookTypeOptions;

  private buildForm(book: BookDto): void {
    this.form = this.fb.group({
      authorId: [book.authorId, required],
      name: [book.name, required],
      type: [book.type, required],
      publishDate: [new Date(book.publishDate), required],
      price: [book.price, required],
    });
  }

  constructor() {
    this.activatedRoute.params
      .pipe(
        filter(params => params.id),
        tap(({ id }) => (this.id = id)),
        switchMap(({ id }) => this.bookService.get(id)),
        tap(book => this.buildForm(book))
      )
      .subscribe();
  }

  save(): void {
    if (this.form.invalid) return;

    this.bookService.update(this.id, this.form.value).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
