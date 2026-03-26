import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {
  ListService,
  PagedResultDto,
  LocalizationPipe,
  PermissionDirective,
  AutofocusDirective
} from '@abp/ng.core';
import {
  ConfirmationService,
  Confirmation,
  NgxDatatableDefaultDirective,
  NgxDatatableListDirective,
  ModalCloseDirective,
  ModalComponent
} from '@abp/ng.theme.shared';
import { GenreService, GenreDto } from '../proxy/genres';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgbDropdownModule,
    ModalComponent,
    AutofocusDirective,
    NgxDatatableListDirective,
    NgxDatatableDefaultDirective,
    PermissionDirective,
    ModalCloseDirective,
    LocalizationPipe,
  ],
  providers: [ListService],
})
export class GenreComponent implements OnInit {
  public readonly list = inject(ListService);
  private genreService = inject(GenreService);
  private fb = inject(FormBuilder);
  private confirmation = inject(ConfirmationService);

  genre = { items: [], totalCount: 0 } as PagedResultDto<GenreDto>;
  selectedGenre = {} as GenreDto;
  form: FormGroup;
  isModalOpen = false;

  ngOnInit() {
    const genreStreamCreator = query => this.genreService.getList(query);

    this.list.hookToQuery(genreStreamCreator).subscribe(response => {
      this.genre = response;
    });
  }

  createGenre() {
    this.selectedGenre = {} as GenreDto;
    this.buildForm();
    this.isModalOpen = true;
  }

  editGenre(id: string) {
    this.genreService.get(id).subscribe(genre => {
      this.selectedGenre = genre;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe(status => {
      if (status === Confirmation.Status.confirm) {
        this.genreService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  buildForm() {
    this.form = this.fb.group({
      name: [this.selectedGenre.name || '', Validators.required],
      description: [this.selectedGenre.description || ''],
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    let request = this.genreService.create(this.form.value);
    if (this.selectedGenre.id) {
      request = this.genreService.update(this.selectedGenre.id, this.form.value);
    }

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }
}
