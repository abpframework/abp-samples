import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import {
  ListService,
  PagedResultDto,
  LocalizationPipe,
  PermissionDirective,
  PagedAndSortedResultRequestDto,
} from '@abp/ng.core';
import { AuthorService, AuthorDto } from '@proxy/authors';
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
import { PageModule } from '@abp/ng.components/page';

// Sends the picked local calendar date as yyyy-MM-dd, so toISOString() time-zone shifts cannot move it to the previous day.
function toDateOnly(date: Date | null): string | null {
  if (!date) {
    return null;
  }
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

@Component({
  selector: 'app-author',
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
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
  providers: [ListService, { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorComponent {
  readonly list = inject(ListService<PagedAndSortedResultRequestDto>);
  private authorService = inject(AuthorService);
  private fb = inject(FormBuilder);
  private confirmation = inject(ConfirmationService);

  readonly author = toSignal(this.list.hookToQuery(query => this.authorService.getList(query)), {
    initialValue: { items: [], totalCount: 0 } as PagedResultDto<AuthorDto>,
  });

  readonly isModalOpen = signal(false);

  form!: FormGroup;

  readonly selectedAuthor = signal({} as AuthorDto);

  createAuthor() {
    this.selectedAuthor.set({} as AuthorDto);
    this.buildForm();
    this.isModalOpen.set(true);
  }

  editAuthor(id: string) {
    this.authorService.get(id).subscribe(author => {
      this.selectedAuthor.set(author);
      this.buildForm();
      this.isModalOpen.set(true);
    });
  }

  buildForm() {
    const selectedAuthor = this.selectedAuthor();
    this.form = this.fb.group({
      name: [selectedAuthor.name || '', Validators.required],
      birthDate: [
        selectedAuthor.birthDate ? new Date(selectedAuthor.birthDate) : null,
        Validators.required,
      ],
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const selectedAuthor = this.selectedAuthor();
    const value = { ...this.form.value, birthDate: toDateOnly(this.form.value.birthDate) };
    if (selectedAuthor.id) {
      this.authorService.update(selectedAuthor.id, value).subscribe(() => {
        this.isModalOpen.set(false);
        this.form.reset();
        this.list.get();
      });
    } else {
      this.authorService.create(value).subscribe(() => {
        this.isModalOpen.set(false);
        this.form.reset();
        this.list.get();
      });
    }
  }

  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe(status => {
      if (status === Confirmation.Status.confirm) {
        this.authorService.delete(id).subscribe(() => this.list.get());
      }
    });
  }
}
