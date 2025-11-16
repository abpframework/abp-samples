import { ListService, PagedResultDto, LocalizationPipe, PermissionDirective } from '@abp/ng.core';
import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService, BookDto, bookTypeOptions, AuthorLookupDto } from '@proxy/books';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbDateNativeAdapter, NgbDateAdapter, NgbDatepickerModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationService, Confirmation, ThemeSharedModule } from '@abp/ng.theme.shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PageModule } from '@abp/ng.components/page';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    NgbDatepickerModule, 
    NgbDropdownModule, 
    PageModule,
    LocalizationPipe,
    PermissionDirective,
    ThemeSharedModule,
  ],
  templateUrl: './book.component.html', 
  styleUrls: ['./book.component.scss'],
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class BookComponent implements OnInit {
  readonly list = inject(ListService);
  private bookService = inject(BookService);
  private fb = inject(FormBuilder);
  private confirmation = inject(ConfirmationService);

  book = signal<PagedResultDto<BookDto>>({ items: [], totalCount: 0 });

  form: FormGroup;

  selectedBook = signal<BookDto>({} as BookDto);

  authors$: Observable<AuthorLookupDto[]>;

  bookTypes = bookTypeOptions;

  isModalOpen = signal(false);

  constructor() {
    const bookService = this.bookService;

    this.authors$ = bookService.getAuthorLookup().pipe(map((r) => r.items));
  }

  ngOnInit() {
    const bookStreamCreator = (query) => this.bookService.getList(query);

    this.list.hookToQuery(bookStreamCreator).subscribe((response) => {
      this.book.set(response);
    });
  }

  createBook() {
    this.selectedBook.set({} as BookDto);
    this.buildForm();
    this.isModalOpen.set(true);
  }

  editBook(id: string) {
    this.bookService.get(id).subscribe((book) => {
      this.selectedBook.set(book);
      this.buildForm();
      this.isModalOpen.set(true);
    });
  }

  buildForm() {
    const book = this.selectedBook();
    this.form = this.fb.group({
      authorId: [book.authorId || null, Validators.required],
      name: [book.name || null, Validators.required],
      type: [book.type || null, Validators.required],
      publishDate: [
        book.publishDate ? new Date(book.publishDate) : null,
        Validators.required,
      ],
      price: [book.price || null, Validators.required],
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const book = this.selectedBook();
    const request = book.id
      ? this.bookService.update(book.id, this.form.value)
      : this.bookService.create(this.form.value);

    request.subscribe(() => {
      this.isModalOpen.set(false);
      this.form.reset();
      this.list.get();
    });
  }

  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', 'AbpAccount::AreYouSure').subscribe((status) => {
      if (status === Confirmation.Status.confirm) {
        this.bookService.delete(id).subscribe(() => this.list.get());
      }
    });
  }
}
