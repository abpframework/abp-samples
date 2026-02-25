import type { ProductCreationDto, ProductDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private restService = inject(RestService);
  apiName = 'Default';
  

  create = (input: ProductCreationDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/catalog/product',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, ProductDto[]>({
      method: 'GET',
      url: '/api/catalog/product',
    },
    { apiName: this.apiName,...config });
}