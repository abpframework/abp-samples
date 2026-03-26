import type { MovieDto, CreateUpdateMovieDto, GenreLookupDto, ActorLookupDto } from './models';
import { RestService } from '@abp/ng.core';
import type { ListResultDto, PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiName = 'Default';

  create = (input: CreateUpdateMovieDto) =>
    this.restService.request<any, MovieDto>({
      method: 'POST',
      url: '/api/app/movie',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/movie/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, MovieDto>({
      method: 'GET',
      url: `/api/app/movie/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<MovieDto>>({
      method: 'GET',
      url: '/api/app/movie',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateMovieDto) =>
    this.restService.request<any, MovieDto>({
      method: 'PUT',
      url: `/api/app/movie/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  getGenreLookup = () =>
    this.restService.request<any, ListResultDto<GenreLookupDto>>({
      method: 'GET',
      url: '/api/app/movie/genre-lookup',
    },
    { apiName: this.apiName });

  getActorLookup = () =>
    this.restService.request<any, ListResultDto<ActorLookupDto>>({
      method: 'GET',
      url: '/api/app/movie/actor-lookup',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
