import { Injectable, inject } from '@angular/core';
import { RestService, PagedResultDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import { Observable } from 'rxjs';
import {
  EventDto,
  CreateEventDto,
  UpdateEventDto,
  GetEventListInput,
  AttendeeDto,
  CreateAttendeeDto,
  UpdateAttendeeDto,
} from './models';

@Injectable({ providedIn: 'root' })
export class EventService {
  private rest = inject(RestService);
  private apiUrl = '/api/app/event';

  // ── Event CRUD ──

  get(id: string): Observable<EventDto> {
    return this.rest.request<void, EventDto>({
      method: 'GET',
      url: `${this.apiUrl}/${id}`,
    });
  }

  getList(input: GetEventListInput): Observable<PagedResultDto<EventDto>> {
    return this.rest.request<void, PagedResultDto<EventDto>>({
      method: 'GET',
      url: this.apiUrl,
      params: {
        filter: input.filter,
        sorting: input.sorting,
        skipCount: input.skipCount,
        maxResultCount: input.maxResultCount,
      },
    });
  }

  create(input: CreateEventDto): Observable<EventDto> {
    return this.rest.request<CreateEventDto, EventDto>({
      method: 'POST',
      url: this.apiUrl,
      body: input,
    });
  }

  update(id: string, input: UpdateEventDto): Observable<EventDto> {
    return this.rest.request<UpdateEventDto, EventDto>({
      method: 'PUT',
      url: `${this.apiUrl}/${id}`,
      body: input,
    });
  }

  delete(id: string): Observable<void> {
    return this.rest.request<void, void>({
      method: 'DELETE',
      url: `${this.apiUrl}/${id}`,
    });
  }

  // ── Attendee CRUD ──

  getAttendee(eventId: string, attendeeId: string): Observable<AttendeeDto> {
    return this.rest.request<void, AttendeeDto>({
      method: 'GET',
      url: `${this.apiUrl}/attendee`,
      params: {
        eventId,
        attendeeId,
      },
    });
  }

  getAttendees(
    eventId: string,
    input: PagedAndSortedResultRequestDto
  ): Observable<PagedResultDto<AttendeeDto>> {
    return this.rest.request<void, PagedResultDto<AttendeeDto>>({
      method: 'GET',
      url: `${this.apiUrl}/attendees/${eventId}`,
      params: {
        sorting: input.sorting,
        skipCount: input.skipCount,
        maxResultCount: input.maxResultCount,
      },
    });
  }

  addAttendee(eventId: string, input: CreateAttendeeDto): Observable<AttendeeDto> {
    return this.rest.request<CreateAttendeeDto, AttendeeDto>({
      method: 'POST',
      url: `${this.apiUrl}/attendee/${eventId}`,
      body: input,
    });
  }

  updateAttendee(
    eventId: string,
    attendeeId: string,
    input: UpdateAttendeeDto
  ): Observable<AttendeeDto> {
    return this.rest.request<UpdateAttendeeDto, AttendeeDto>({
      method: 'PUT',
      url: `${this.apiUrl}/attendee`,
      params: {
        eventId,
        attendeeId,
      },
      body: input,
    });
  }

  removeAttendee(eventId: string, attendeeId: string): Observable<void> {
    return this.rest.request<void, void>({
      method: 'DELETE',
      url: `${this.apiUrl}/attendee`,
      params: {
        eventId,
        attendeeId,
      },
    });
  }
}
