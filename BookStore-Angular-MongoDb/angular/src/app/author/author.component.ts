import { Component, OnInit, inject } from '@angular/core';
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

  author = { items: [], totalCount: 0 } as PagedResultDto<AuthorDto>;

  isModalOpen = false;

  form: FormGroup;

  selectedAuthor = {} as AuthorDto;

  ngOnInit(): void {
    const authorStreamCreator = query => this.authorService.getList(query);

<<<<<<< HEAD
    this.list.hookToQuery(authorStreamCreator).subscribe(response => {
      this.author.set(response);
=======
    this.list.hookToQuery(authorStreamCreator).subscribe((response) => {
      this.author = response;
>>>>>>> parent of d36d7924 (Refactor components to use Angular signals)
    });
  }

  createAuthor() {
    this.selectedAuthor = {} as AuthorDto;
    this.buildForm();
    this.isModalOpen = true;
  }

  editAuthor(id: string) {
<<<<<<< HEAD
    this.authorService.get(id).subscribe(author => {
      this.selectedAuthor.set(author);
=======
    this.authorService.get(id).subscribe((author) => {
      this.selectedAuthor = author;
>>>>>>> parent of d36d7924 (Refactor components to use Angular signals)
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  buildForm() {
    this.form = this.fb.group({
<<<<<<< HEAD
      name: [author.name || '', Validators.required],
      birthDate: [author.birthDate ? new Date(author.birthDate) : null, Validators.required],
=======
      name: [this.selectedAuthor.name || '', Validators.required],
      birthDate: [
        this.selectedAuthor.birthDate ? new Date(this.selectedAuthor.birthDate) : null,
        Validators.required,
      ],
>>>>>>> parent of d36d7924 (Refactor components to use Angular signals)
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

<<<<<<< HEAD
    const author = this.selectedAuthor();
    if (author.id) {
      this.authorService.update(author.id, this.form.value).subscribe(() => {
        this.isModalOpen.set(false);
        this.form.reset();
        this.list.get();
      });
=======
    if (this.selectedAuthor.id) {
      this.authorService
        .update(this.selectedAuthor.id, this.form.value)
        .subscribe(() => {
          this.isModalOpen = false;
          this.form.reset();
          this.list.get();
        });
>>>>>>> parent of d36d7924 (Refactor components to use Angular signals)
    } else {
      this.authorService.create(this.form.value).subscribe(() => {
        this.isModalOpen = false;
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
