import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import {
  ListService,
  PagedResultDto,
  LocalizationPipe,
  PermissionDirective,
  AutofocusDirective,
} from '@abp/ng.core';
import {
  ConfirmationService,
  Confirmation,
  ModalCloseDirective,
  ModalComponent
} from '@abp/ng.theme.shared';
import { MovieService, MovieDto, GenreLookupDto, ActorLookupDto } from '../proxy/movies';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    ModalComponent,
    AutofocusDirective,
    PermissionDirective,
    ModalCloseDirective,
    LocalizationPipe,
    DecimalPipe,
  ],
  providers: [ListService],
})
export class MovieComponent implements OnInit {
  public readonly list = inject(ListService);
  private movieService = inject(MovieService);
  private fb = inject(FormBuilder);
  private confirmation = inject(ConfirmationService);

  movie = { items: [], totalCount: 0 } as PagedResultDto<MovieDto>;
  selectedMovie = {} as MovieDto;
  form: FormGroup;
  isModalOpen = false;
  genres: GenreLookupDto[] = [];
  actors: ActorLookupDto[] = [];

  ngOnInit() {
    const movieStreamCreator = query => this.movieService.getList(query);

    this.list.hookToQuery(movieStreamCreator).subscribe(response => {
      this.movie = response;
    });

    // Load lookup data
    this.movieService.getGenreLookup().subscribe(result => {
      this.genres = result.items;
    });

    this.movieService.getActorLookup().subscribe(result => {
      this.actors = result.items;
    });
  }

  createMovie() {
    this.selectedMovie = {} as MovieDto;
    this.buildForm();
    this.isModalOpen = true;
  }

  editMovie(id: string) {
    this.movieService.get(id).subscribe(movie => {
      this.selectedMovie = movie;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe(status => {
      if (status === Confirmation.Status.confirm) {
        this.movieService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  buildForm() {
    this.form = this.fb.group({
      title: [this.selectedMovie.title || '', Validators.required],
      year: [this.selectedMovie.year || null, [Validators.required, Validators.min(1888)]],
      description: [this.selectedMovie.description || ''],
      rating: [this.selectedMovie.rating || 0, [Validators.required, Validators.min(0), Validators.max(10)]],
      imageUrl: [this.selectedMovie.imageUrl || ''],
      genreId: [this.selectedMovie.genreId || null, Validators.required],
      actorIds: [this.selectedMovie.actorIds || []],
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    let request = this.movieService.create(this.form.value);
    if (this.selectedMovie.id) {
      request = this.movieService.update(this.selectedMovie.id, this.form.value);
    }

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }

  isActorSelected(actorId: string): boolean {
    const actorIds = this.form?.get('actorIds')?.value || [];
    return actorIds.includes(actorId);
  }

  toggleActor(actorId: string) {
    const actorIds: string[] = [...(this.form.get('actorIds')?.value || [])];
    const index = actorIds.indexOf(actorId);
    if (index > -1) {
      actorIds.splice(index, 1);
    } else {
      actorIds.push(actorId);
    }
    this.form.get('actorIds')?.setValue(actorIds);
  }
}
