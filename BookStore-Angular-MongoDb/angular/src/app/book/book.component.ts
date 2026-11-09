import {
  ListService,
  PagedResultDto,
  LocalizationPipe,
  PermissionDirective,
  PagedAndSortedResultRequestDto,
} from '@abp/ng.core';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { BookService, BookDto, bookTypeOptions, AuthorLookupDto, BookType } from '@proxy/books';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import {
  NgbDateNativeAdapter,
  NgbDateAdapter,
  NgbDatepickerModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationService, Confirmation, ThemeSharedModule } from '@abp/ng.theme.shared';
import { map } from 'rxjs/operators';
import { PageModule } from '@abp/ng.components/page';

// The API may send the enum as a number or as its name. Options are always the numeric value.
function toBookType(type: BookType | string | null | undefined): BookType | null {
  if (type === null || type === undefined || type === '') {
    return null;
  }

  if (typeof type === 'number') {
    return type;
  }

  const numeric = Number(type);
  if (bookTypeOptions.some(option => option.value === numeric)) {
    return numeric;
  }

  return bookTypeOptions.find(option => option.key === type)?.value ?? null;
}

// Sends the picked local calendar date as yyyy-MM-dd, so toISOString() time-zone shifts cannot move it to the previous day.
function toDateOnly(date: Date | null): string | null {
  if (!date) {
    return null;
  }
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

@Component({
  selector: 'app-book',
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  readonly list = inject(ListService<PagedAndSortedResultRequestDto>);
  private bookService = inject(BookService);
  private fb = inject(FormBuilder);
  private confirmation = inject(ConfirmationService);

  readonly book = toSignal(this.list.hookToQuery(query => this.bookService.getList(query)), {
    initialValue: { items: [], totalCount: 0 } as PagedResultDto<BookDto>,
  });

  form!: FormGroup;

  readonly selectedBook = signal({} as BookDto);

  readonly authors = toSignal(
    this.bookService.getAuthorLookup().pipe(map(r => r.items ?? [])),
    { initialValue: [] as AuthorLookupDto[] },
  );

  bookTypes = bookTypeOptions;

  readonly compareBookType = (option: BookType | null, value: BookType | string | null) =>
    toBookType(option) === toBookType(value);

  readonly isModalOpen = signal(false);

  createBook() {
    this.selectedBook.set({} as BookDto);
    this.buildForm();
    this.isModalOpen.set(true);
  }

  editBook(id: string) {
    this.bookService.get(id).subscribe(book => {
      this.selectedBook.set(book);
      this.buildForm();
      this.isModalOpen.set(true);
    });
  }

  buildForm() {
    const selectedBook = this.selectedBook();
    this.form = this.fb.group({
      authorId: [selectedBook.authorId || null, Validators.required],
      name: [selectedBook.name || null, Validators.required],
      type: [toBookType(selectedBook.type), Validators.required],
      publishDate: [
        selectedBook.publishDate ? new Date(selectedBook.publishDate) : null,
        Validators.required,
      ],
      price: [selectedBook.price || null, Validators.required],
    });
  }

  // The modal view is created after this form, so the select must be written again once its options exist.
  syncBookType() {
    const type = toBookType(this.selectedBook().type);
    setTimeout(() => this.form?.get('type')?.setValue(type));
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const selectedBook = this.selectedBook();
    const value = { ...this.form.value, publishDate: toDateOnly(this.form.value.publishDate) };
    const request = selectedBook.id
      ? this.bookService.update(selectedBook.id, value)
      : this.bookService.create(value);

    request.subscribe(() => {
      this.isModalOpen.set(false);
      this.form.reset();
      this.list.get();
    });
  }

  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', 'AbpAccount::AreYouSure').subscribe(status => {
      if (status === Confirmation.Status.confirm) {
        this.bookService.delete(id).subscribe(() => this.list.get());
      }
    });
  }
}
