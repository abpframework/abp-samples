import type { DashboardDto, DashboardInput, GetMyOrdersInput, GetOrdersInput, OrderCreateDto, OrderDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  apiName = 'Ordering';

  create = (input: OrderCreateDto) =>
    this.restService.request<any, OrderDto>({
      method: 'POST',
      url: '/api/ordering/order',
      body: input,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, OrderDto>({
      method: 'GET',
      url: `/api/ordering/order/${id}`,
    },
    { apiName: this.apiName });

  getByOrderNo = (orderNo: number) =>
    this.restService.request<any, OrderDto>({
      method: 'GET',
      url: '/api/ordering/order/by-order-no',
      params: { orderNo },
    },
    { apiName: this.apiName });

  getDashboard = (input: DashboardInput) =>
    this.restService.request<any, DashboardDto>({
      method: 'GET',
      url: '/api/ordering/order/dashboard',
      params: { filter: input.filter },
    },
    { apiName: this.apiName });

  getListPaged = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<OrderDto>>({
      method: 'GET',
      url: '/api/ordering/order/paged',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getMyOrders = (input: GetMyOrdersInput) =>
    this.restService.request<any, OrderDto[]>({
      method: 'GET',
      url: '/api/ordering/order/my-orders',
      params: { filter: input.filter },
    },
    { apiName: this.apiName });

  getOrders = (input: GetOrdersInput) =>
    this.restService.request<any, OrderDto[]>({
      method: 'GET',
      url: '/api/ordering/order/orders',
      params: { filter: input.filter },
    },
    { apiName: this.apiName });

  setAsCancelled = (id: string) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/ordering/order/${id}/set-as-cancelled`,
    },
    { apiName: this.apiName });

  setAsShipped = (id: string) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/ordering/order/${id}/set-as-shipped`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
