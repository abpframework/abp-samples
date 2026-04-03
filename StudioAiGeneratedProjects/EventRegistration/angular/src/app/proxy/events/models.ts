import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface EventDto {
  id: string;
  creationTime: string;
  creatorId?: string;
  lastModificationTime?: string;
  lastModifierId?: string;
  isDeleted: boolean;
  deleterId?: string;
  deletionTime?: string;
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
  location: string;
  capacity: number;
  isCancelled: boolean;
  attendeeCount: number;
  attendees?: AttendeeDto[];
}

export interface CreateEventDto {
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
  location: string;
  capacity: number;
}

export interface UpdateEventDto {
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
  location: string;
  capacity: number;
}

export interface GetEventListInput extends PagedAndSortedResultRequestDto {
  filter?: string;
}

export interface AttendeeDto {
  id: string;
  creationTime: string;
  creatorId?: string;
  lastModificationTime?: string;
  lastModifierId?: string;
  isDeleted: boolean;
  deleterId?: string;
  deletionTime?: string;
  eventId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}

export interface CreateAttendeeDto {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}

export interface UpdateAttendeeDto {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}
