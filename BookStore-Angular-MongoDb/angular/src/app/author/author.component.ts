import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListService, PagedResultDto, LocalizationPipe, PermissionDirective } from '@abp/ng.core';
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
})
export class AuthorComponent implements OnInit {
  readonly list = inject(ListService);
  private authorService = inject(AuthorService);
  private fb = inject(FormBuilder);
  private confirmation = inject(ConfirmationService);

  author = signal<PagedResultDto<AuthorDto>>({ items: [], totalCount: 0 });

  isModalOpen = signal(false);

  form: FormGroup;

  selectedAuthor = signal<AuthorDto>({} as AuthorDto);

  ngOnInit(): void {
    const authorStreamCreator = query => this.authorService.getList(query);

    this.list.hookToQuery(authorStreamCreator).subscribe(response => {
      this.author.set(response);
    });
  }

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
    const author = this.selectedAuthor();
    this.form = this.fb.group({
      name: [author.name || '', Validators.required],
      birthDate: [author.birthDate ? new Date(author.birthDate) : null, Validators.required],
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const author = this.selectedAuthor();
    if (author.id) {
      this.authorService.update(author.id, this.form.value).subscribe(() => {
        this.isModalOpen.set(false);
        this.form.reset();
        this.list.get();
      });
    } else {
      this.authorService.create(this.form.value).subscribe(() => {
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
