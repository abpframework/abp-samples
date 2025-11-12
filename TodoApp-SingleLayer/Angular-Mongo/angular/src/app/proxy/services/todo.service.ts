import type { TodoItemDto } from './dtos/models';
import { RestService } from '@abp/ng.core';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiName = 'Default';

  create = (text: string) =>
    this.restService.request<any, TodoItemDto>(
      {
        method: 'POST',
        url: '/api/app/todo',
        params: { text },
      },
      { apiName: this.apiName }
    );

  delete = (id: string) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/todo/${id}`,
      },
      { apiName: this.apiName }
    );

  getList = () =>
    this.restService.request<any, TodoItemDto[]>(
      {
        method: 'GET',
        url: '/api/app/todo',
      },
      { apiName: this.apiName }
    );

  private restService = inject(RestService);
}
