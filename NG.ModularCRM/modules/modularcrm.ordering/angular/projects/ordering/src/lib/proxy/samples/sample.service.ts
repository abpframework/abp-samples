import type { SampleDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SampleService {
  private restService = inject(RestService);
  apiName = 'Default';
  

  get = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SampleDto>({
      method: 'GET',
      url: '/api/ordering/sample',
    },
    { apiName: this.apiName,...config });
  

  getAuthorized = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, SampleDto>({
      method: 'GET',
      url: '/api/ordering/sample/authorized',
    },
    { apiName: this.apiName,...config });
}