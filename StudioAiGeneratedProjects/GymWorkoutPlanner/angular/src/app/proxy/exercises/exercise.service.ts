import type { CreateUpdateExerciseDto, ExerciseDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  apiName = 'Default';

  create = (input: CreateUpdateExerciseDto) =>
    this.restService.request<any, ExerciseDto>(
      {
        method: 'POST',
        url: '/api/app/exercise',
        body: input,
      },
      { apiName: this.apiName }
    );

  delete = (id: string) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/exercise/${id}`,
      },
      { apiName: this.apiName }
    );

  get = (id: string) =>
    this.restService.request<any, ExerciseDto>(
      {
        method: 'GET',
        url: `/api/app/exercise/${id}`,
      },
      { apiName: this.apiName }
    );

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<ExerciseDto>>(
      {
        method: 'GET',
        url: '/api/app/exercise',
        params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
      },
      { apiName: this.apiName }
    );

  update = (id: string, input: CreateUpdateExerciseDto) =>
    this.restService.request<any, ExerciseDto>(
      {
        method: 'PUT',
        url: `/api/app/exercise/${id}`,
        body: input,
      },
      { apiName: this.apiName }
    );

  constructor(private restService: RestService) {}
}
