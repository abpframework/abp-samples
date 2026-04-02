import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
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
  NgxDatatableDefaultDirective,
  NgxDatatableListDirective,
  ModalCloseDirective,
  ModalComponent,
} from '@abp/ng.theme.shared';
import { ExerciseService, ExerciseDto } from '../proxy/exercises';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
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
export class ExerciseComponent implements OnInit {
  public readonly list = inject(ListService);
  private readonly exerciseService = inject(ExerciseService);
  private readonly fb = inject(FormBuilder);
  private readonly confirmation = inject(ConfirmationService);

  exercises = { items: [], totalCount: 0 } as PagedResultDto<ExerciseDto>;
  selectedExercise = {} as ExerciseDto;
  form: FormGroup;
  isModalOpen = false;

  ngOnInit() {
    const streamCreator = query => this.exerciseService.getList(query);
    this.list.hookToQuery(streamCreator).subscribe(response => {
      this.exercises = response;
    });
  }

  createExercise() {
    this.selectedExercise = {} as ExerciseDto;
    this.buildForm();
    this.isModalOpen = true;
  }

  editExercise(id: string) {
    this.exerciseService.get(id).subscribe(item => {
      this.selectedExercise = item;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe(status => {
      if (status === Confirmation.Status.confirm) {
        this.exerciseService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  buildForm() {
    this.form = this.fb.group({
      name: [this.selectedExercise.name || '', [Validators.required, Validators.maxLength(128)]],
      targetMuscleGroup: [this.selectedExercise.targetMuscleGroup || '', [Validators.required, Validators.maxLength(64)]],
      description: [this.selectedExercise.description || '', [Validators.maxLength(1024)]],
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const requestData = this.form.value;
    let request = this.exerciseService.create(requestData);
    if (this.selectedExercise.id) {
      request = this.exerciseService.update(this.selectedExercise.id, requestData);
    }

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }
}
