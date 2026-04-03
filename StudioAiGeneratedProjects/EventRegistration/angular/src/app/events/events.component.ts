import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { ListService, PagedResultDto, LocalizationPipe, PermissionService } from '@abp/ng.core';
import { ConfirmationService, ToasterService } from '@abp/ng.theme.shared';

import { EventService, EventDto, CreateEventDto, UpdateEventDto, GetEventListInput } from '../proxy/events';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, LocalizationPipe],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  providers: [ListService],
})
export class EventsComponent implements OnInit {
  private eventService = inject(EventService);
  private fb = inject(FormBuilder);
  private confirmation = inject(ConfirmationService);
  private toaster = inject(ToasterService);
  private permissionService = inject(PermissionService);
  list = inject(ListService);

  data: PagedResultDto<EventDto> = { items: [], totalCount: 0 };
  filter = '';

  form: FormGroup = new FormGroup({});
  selectedEvent: EventDto | null = null;
  isModalOpen = false;
  modalBusy = false;

  get totalPages(): number {
    return Math.ceil(this.data.totalCount / this.list.maxResultCount);
  }

  // Permissions
  canCreate = false;
  canEdit = false;
  canDelete = false;
  canViewAttendees = false;

  ngOnInit(): void {
    this.canCreate = this.permissionService.getGrantedPolicy('EventRegistration.Events.Create');
    this.canEdit = this.permissionService.getGrantedPolicy('EventRegistration.Events.Edit');
    this.canDelete = this.permissionService.getGrantedPolicy('EventRegistration.Events.Delete');
    this.canViewAttendees = this.permissionService.getGrantedPolicy('EventRegistration.Events.Attendees');

    this.hookToQuery();
  }

  private hookToQuery(): void {
    const fn = (query: GetEventListInput) => {
      query.filter = this.filter;
      return this.eventService.getList(query);
    };
    this.list.hookToQuery(fn).subscribe(res => {
      this.data = res;
    });
  }

  search(): void {
    this.list.get();
  }

  clearFilter(): void {
    this.filter = '';
    this.list.get();
  }

  openCreateModal(): void {
    this.selectedEvent = null;
    this.buildForm();
    this.isModalOpen = true;
  }

  openEditModal(event: EventDto): void {
    this.selectedEvent = event;
    this.buildForm();
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  private buildForm(): void {
    const e = this.selectedEvent;
    this.form = this.fb.group({
      title: [e?.title || '', [Validators.required, Validators.maxLength(256)]],
      description: [e?.description || '', [Validators.maxLength(2000)]],
      startDate: [e ? this.toDateInputValue(e.startDate) : '', Validators.required],
      endDate: [e ? this.toDateInputValue(e.endDate) : '', Validators.required],
      location: [e?.location || '', [Validators.required, Validators.maxLength(512)]],
      capacity: [e?.capacity || 1, [Validators.required, Validators.min(1)]],
    });
  }

  save(): void {
    if (this.form.invalid) return;
    this.modalBusy = true;

    const formValue = this.form.value;
    const dto = {
      ...formValue,
      startDate: new Date(formValue.startDate).toISOString(),
      endDate: new Date(formValue.endDate).toISOString(),
    };

    const request$ = this.selectedEvent
      ? this.eventService.update(this.selectedEvent.id, dto as UpdateEventDto)
      : this.eventService.create(dto as CreateEventDto);

    request$
      .pipe(finalize(() => (this.modalBusy = false)))
      .subscribe({
        next: () => {
          this.isModalOpen = false;
          this.list.get();
          this.toaster.success(
            this.selectedEvent ? '::Event:UpdateSuccess' : '::Event:CreateSuccess'
          );
        },
      });
  }

  deleteEvent(event: EventDto): void {
    this.confirmation
      .warn('::Event:DeleteConfirmation', '::AreYouSure', {
        messageLocalizationParams: [event.title],
      })
      .subscribe(status => {
        if (status === 'confirm') {
          this.eventService.delete(event.id).subscribe(() => {
            this.list.get();
            this.toaster.success('::Event:DeleteSuccess');
          });
        }
      });
  }

  private toDateInputValue(dateStr: string): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    // Format: YYYY-MM-DDTHH:mm for datetime-local input
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
}
