import type { GenreDto, CreateUpdateGenreDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  apiName = 'Default';

  create = (input: CreateUpdateGenreDto) =>
    this.restService.request<any, GenreDto>({
      method: 'POST',
      url: '/api/app/genre',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/genre/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, GenreDto>({
      method: 'GET',
      url: `/api/app/genre/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<GenreDto>>({
      method: 'GET',
      url: '/api/app/genre',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateGenreDto) =>
    this.restService.request<any, GenreDto>({
      method: 'PUT',
      url: `/api/app/genre/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
