import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbDropdownModule, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import {
  AutofocusDirective,
  ListService,
  LocalizationPipe,
  PagedResultDto,
  PermissionDirective,
} from '@abp/ng.core';
import {
  Confirmation,
  ConfirmationService,
  ModalCloseDirective,
  ModalComponent,
  NgxDatatableDefaultDirective,
  NgxDatatableListDirective,
} from '@abp/ng.theme.shared';
import { finalize } from 'rxjs/operators';
import {
  CreateUpdateWorkoutPlanDto,
  WorkoutPlanDto,
  WorkoutPlanExerciseDto,
  WorkoutPlanService,
} from '../proxy/workout-plans';
import { ExerciseDto, ExerciseService } from '../proxy/exercises';

@Component({
  selector: 'app-workout-plan',
  templateUrl: './workout-plan.component.html',
  styles: [
    `
      .workout-plan-form {
        max-height: 80vh;
        overflow-y: auto;
        padding-right: 0.25rem;
      }

      :host ::ng-deep .workout-plan-modal .modal-dialog {
        width: 90vw;
        max-width: 90vw;
      }

      :host ::ng-deep .workout-plan-modal .modal-content {
        min-height: 80vh;
      }

      :host ::ng-deep .workout-plan-modal .modal-body {
        padding: 1.25rem 1.5rem;
      }

      .exercise-section {
        margin-top: 0.5rem;
      }

      .workout-line {
        border: 1px solid var(--bs-border-color);
        border-radius: 0.5rem;
        padding: 0.9rem;
        background: var(--bs-light-bg-subtle, #f8f9fa);
      }
    `,
  ],
  imports: [
    CommonModule,
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
export class WorkoutPlanComponent implements OnInit {
  public readonly list = inject(ListService);
  private readonly workoutPlanService = inject(WorkoutPlanService);
  private readonly exerciseService = inject(ExerciseService);
  private readonly fb = inject(FormBuilder);
  private readonly confirmation = inject(ConfirmationService);

  workoutPlans = { items: [], totalCount: 0 } as PagedResultDto<WorkoutPlanDto>;
  selectedWorkoutPlan = {} as WorkoutPlanDto;
  exerciseOptions: ExerciseDto[] = [];
  isLoadingExercises = false;
  hasExerciseLoadError = false;
  form: FormGroup;
  isModalOpen = false;
  modalOptions: NgbModalOptions = {
    size: 'lg',
    windowClass: 'workout-plan-modal',
  };

  ngOnInit() {
    this.loadExerciseOptions();

    const streamCreator = query => this.workoutPlanService.getList(query);
    this.list.hookToQuery(streamCreator).subscribe(response => {
      this.workoutPlans = response;
    });
  }

  get exercisesArray(): FormArray {
    return this.form.get('exercises') as FormArray;
  }

  createWorkoutPlan() {
    this.selectedWorkoutPlan = {} as WorkoutPlanDto;
    this.buildForm();
    this.isModalOpen = true;

    if (!this.exerciseOptions.length && !this.isLoadingExercises) {
      this.loadExerciseOptions();
    }
  }

  editWorkoutPlan(id: string) {
    this.workoutPlanService.get(id).subscribe(item => {
      this.selectedWorkoutPlan = item;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe(status => {
      if (status === Confirmation.Status.confirm) {
        this.workoutPlanService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  buildForm() {
    this.form = this.fb.group({
      name: [this.selectedWorkoutPlan.name || '', [Validators.required, Validators.maxLength(128)]],
      description: [this.selectedWorkoutPlan.description || '', [Validators.maxLength(2048)]],
      exercises: this.fb.array([]),
    });

    const lines = this.selectedWorkoutPlan.exercises?.length
      ? this.selectedWorkoutPlan.exercises
      : [this.createNewLine(1)];

    lines.forEach(line => this.exercisesArray.push(this.buildExerciseLine(line)));
  }

  addExerciseLine() {
    this.exercisesArray.push(this.buildExerciseLine(this.createNewLine(this.exercisesArray.length + 1)));
  }

  removeExerciseLine(index: number) {
    if (this.exercisesArray.length === 1) {
      return;
    }

    this.exercisesArray.removeAt(index);
  }

  save() {
    if (this.form.invalid || this.exercisesArray.length === 0 || this.exerciseOptions.length === 0) {
      return;
    }

    const value = this.form.getRawValue();
    const requestData: CreateUpdateWorkoutPlanDto = {
      name: value.name,
      description: value.description,
      exercises: (value.exercises || []).map((line: any) => ({
        exerciseId: line.exerciseId,
        order: Number(line.order),
        sets: Number(line.sets),
        repetitions: Number(line.repetitions),
        restSeconds: Number(line.restSeconds),
        notes: line.notes || undefined,
      })),
    };

    let request = this.workoutPlanService.create(requestData);

    if (this.selectedWorkoutPlan.id) {
      request = this.workoutPlanService.update(this.selectedWorkoutPlan.id, requestData);
    }

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }

  private buildExerciseLine(line: WorkoutPlanExerciseDto): FormGroup {
    return this.fb.group({
      id: [line.id || null],
      exerciseId: [line.exerciseId || null, Validators.required],
      exerciseName: [line.exerciseName || null],
      order: [line.order || 1, [Validators.required, Validators.min(1)]],
      sets: [line.sets || 1, [Validators.required, Validators.min(1)]],
      repetitions: [line.repetitions || 1, [Validators.required, Validators.min(1)]],
      restSeconds: [line.restSeconds ?? 0, [Validators.required, Validators.min(0)]],
      notes: [line.notes || '', [Validators.maxLength(1024)]],
    });
  }

  private createNewLine(order: number): WorkoutPlanExerciseDto {
    return {
      exerciseId: undefined,
      order,
      sets: 1,
      repetitions: 1,
      restSeconds: 0,
      notes: '',
    };
  }

  private loadExerciseOptions() {
    this.isLoadingExercises = true;
    this.hasExerciseLoadError = false;

    this.exerciseService
      .getList({ skipCount: 0, maxResultCount: 1000 })
      .pipe(finalize(() => (this.isLoadingExercises = false)))
      .subscribe({
        next: response => {
          this.exerciseOptions = response.items || [];
        },
        error: () => {
          this.exerciseOptions = [];
          this.hasExerciseLoadError = true;
        },
      });
  }
}
