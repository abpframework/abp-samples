import type { CreateUpdateWorkoutPlanDto, WorkoutPlanDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkoutPlanService {
  apiName = 'Default';

  create = (input: CreateUpdateWorkoutPlanDto) =>
    this.restService.request<any, WorkoutPlanDto>(
      {
        method: 'POST',
        url: '/api/app/workout-plan',
        body: input,
      },
      { apiName: this.apiName }
    );

  delete = (id: string) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/workout-plan/${id}`,
      },
      { apiName: this.apiName }
    );

  get = (id: string) =>
    this.restService.request<any, WorkoutPlanDto>(
      {
        method: 'GET',
        url: `/api/app/workout-plan/${id}`,
      },
      { apiName: this.apiName }
    );

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<WorkoutPlanDto>>(
      {
        method: 'GET',
        url: '/api/app/workout-plan',
        params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
      },
      { apiName: this.apiName }
    );

  update = (id: string, input: CreateUpdateWorkoutPlanDto) =>
    this.restService.request<any, WorkoutPlanDto>(
      {
        method: 'PUT',
        url: `/api/app/workout-plan/${id}`,
        body: input,
      },
      { apiName: this.apiName }
    );

  constructor(private restService: RestService) {}
}
