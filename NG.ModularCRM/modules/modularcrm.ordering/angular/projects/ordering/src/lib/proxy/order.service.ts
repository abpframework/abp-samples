import type { OrderCreationDto, OrderDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private restService = inject(RestService);
  apiName = 'Default';
  

  create = (input: OrderCreationDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/ordering/order',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, OrderDto[]>({
      method: 'GET',
      url: '/api/ordering/order',
    },
    { apiName: this.apiName,...config });
}