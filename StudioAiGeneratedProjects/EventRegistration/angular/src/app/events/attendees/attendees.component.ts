import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { ListService, PagedResultDto, LocalizationPipe, PermissionService } from '@abp/ng.core';
import { ConfirmationService, ToasterService } from '@abp/ng.theme.shared';

import {
  EventService,
  EventDto,
  AttendeeDto,
  CreateAttendeeDto,
  UpdateAttendeeDto,
} from '../../proxy/events';

@Component({
  selector: 'app-attendees',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, LocalizationPipe],
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.scss'],
  providers: [ListService],
})
export class AttendeesComponent implements OnInit {
  private eventService = inject(EventService);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private confirmation = inject(ConfirmationService);
  private toaster = inject(ToasterService);
  private permissionService = inject(PermissionService);
  list = inject(ListService);

  eventId!: string;
  event: EventDto | null = null;

  data: PagedResultDto<AttendeeDto> = { items: [], totalCount: 0 };

  form: FormGroup = new FormGroup({});
  selectedAttendee: AttendeeDto | null = null;
  isModalOpen = false;
  modalBusy = false;

  get attendeeTotalPages(): number {
    return Math.ceil(this.data.totalCount / this.list.maxResultCount);
  }

  // Permissions
  canCreate = false;
  canEdit = false;
  canDelete = false;

  ngOnInit(): void {
    this.eventId = this.route.snapshot.params['eventId'];

    this.canCreate = this.permissionService.getGrantedPolicy('EventRegistration.Events.Attendees.Create');
    this.canEdit = this.permissionService.getGrantedPolicy('EventRegistration.Events.Attendees.Edit');
    this.canDelete = this.permissionService.getGrantedPolicy('EventRegistration.Events.Attendees.Delete');

    // Load event details
    this.eventService.get(this.eventId).subscribe(e => (this.event = e));

    // Hook attendee list
    this.list.hookToQuery(query =>
      this.eventService.getAttendees(this.eventId, query)
    ).subscribe(res => {
      this.data = res;
    });
  }

  openCreateModal(): void {
    this.selectedAttendee = null;
    this.buildForm();
    this.isModalOpen = true;
  }

  openEditModal(attendee: AttendeeDto): void {
    this.selectedAttendee = attendee;
    this.buildForm();
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  private buildForm(): void {
    const a = this.selectedAttendee;
    this.form = this.fb.group({
      firstName: [a?.firstName || '', [Validators.required, Validators.maxLength(128)]],
      lastName: [a?.lastName || '', [Validators.required, Validators.maxLength(128)]],
      email: [a?.email || '', [Validators.required, Validators.email, Validators.maxLength(256)]],
      phoneNumber: [a?.phoneNumber || '', [Validators.maxLength(32)]],
    });
  }

  save(): void {
    if (this.form.invalid) return;
    this.modalBusy = true;

    const formValue = this.form.value;

    const request$ = this.selectedAttendee
      ? this.eventService.updateAttendee(this.eventId, this.selectedAttendee.id, formValue as UpdateAttendeeDto)
      : this.eventService.addAttendee(this.eventId, formValue as CreateAttendeeDto);

    request$
      .pipe(finalize(() => (this.modalBusy = false)))
      .subscribe({
        next: () => {
          this.isModalOpen = false;
          this.list.get();
          // Refresh event to get updated attendee count
          this.eventService.get(this.eventId).subscribe(e => (this.event = e));
          this.toaster.success(
            this.selectedAttendee ? '::Attendee:UpdateSuccess' : '::Attendee:CreateSuccess'
          );
        },
      });
  }

  deleteAttendee(attendee: AttendeeDto): void {
    this.confirmation
      .warn('::Attendee:DeleteConfirmation', '::AreYouSure', {
        messageLocalizationParams: [`${attendee.firstName} ${attendee.lastName}`],
      })
      .subscribe(status => {
        if (status === 'confirm') {
          this.eventService.removeAttendee(this.eventId, attendee.id).subscribe(() => {
            this.list.get();
            this.eventService.get(this.eventId).subscribe(e => (this.event = e));
            this.toaster.success('::Attendee:DeleteSuccess');
          });
        }
      });
  }
}
