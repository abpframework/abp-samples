import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';
import { NgbDatepickerModule, NgbDateStruct, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
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
import { ActorService, ActorDto } from '../proxy/actors';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgxDatatableModule,
    NgbDropdownModule,
    ModalComponent,
    AutofocusDirective,
    NgxDatatableListDirective,
    NgxDatatableDefaultDirective,
    PermissionDirective,
    ModalCloseDirective,
    LocalizationPipe,
    DatePipe,
  ],
  providers: [ListService],
})
export class ActorComponent implements OnInit {
  public readonly list = inject(ListService);
  private actorService = inject(ActorService);
  private fb = inject(FormBuilder);
  private confirmation = inject(ConfirmationService);

  actor = { items: [], totalCount: 0 } as PagedResultDto<ActorDto>;
  selectedActor = {} as ActorDto;
  form: FormGroup;
  isModalOpen = false;

  ngOnInit() {
    const actorStreamCreator = query => this.actorService.getList(query);

    this.list.hookToQuery(actorStreamCreator).subscribe(response => {
      this.actor = response;
    });
  }

  createActor() {
    this.selectedActor = {} as ActorDto;
    this.buildForm();
    this.isModalOpen = true;
  }

  editActor(id: string) {
    this.actorService.get(id).subscribe(actor => {
      this.selectedActor = actor;
      this.buildForm();
      this.isModalOpen = true;
    });
  }

  delete(id: string) {
    this.confirmation.warn('::AreYouSureToDelete', '::AreYouSure').subscribe(status => {
      if (status === Confirmation.Status.confirm) {
        this.actorService.delete(id).subscribe(() => this.list.get());
      }
    });
  }

  buildForm() {
    this.form = this.fb.group({
      name: [this.selectedActor.name || '', Validators.required],
      birthDate: [
        this.selectedActor.birthDate ? this.parseDate(this.selectedActor.birthDate) : null,
        Validators.required,
      ],
      biography: [this.selectedActor.biography || ''],
    });
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const formValue = this.form.value;
    const requestData = {
      ...formValue,
      birthDate: this.formatDate(formValue.birthDate),
    };

    let request = this.actorService.create(requestData);
    if (this.selectedActor.id) {
      request = this.actorService.update(this.selectedActor.id, requestData);
    }

    request.subscribe(() => {
      this.isModalOpen = false;
      this.form.reset();
      this.list.get();
    });
  }

  private parseDate(value: string | Date): NgbDateStruct | null {
    if (!value) {
      return null;
    }

    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return null;
    }

    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    };
  }

  private formatDate(dateStruct: NgbDateStruct | null): string {
    if (!dateStruct) {
      return '';
    }

    const date = new Date(dateStruct.year, dateStruct.month - 1, dateStruct.day);
    return formatDate(date, 'yyyy-MM-dd', 'en');
  }
}
