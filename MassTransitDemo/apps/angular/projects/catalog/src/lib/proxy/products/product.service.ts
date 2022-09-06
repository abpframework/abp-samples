import type { CreateProductDto, ProductDto, UpdateProductDto } from './models';
import { RestService } from '@abp/ng.core';
import type { ListResultDto, PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiName = 'Catalog';

  create = (input: CreateProductDto) =>
    this.restService.request<any, ProductDto>({
      method: 'POST',
      url: '/api/catalog/product',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/catalog/product/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, ProductDto>({
      method: 'GET',
      url: `/api/catalog/product/${id}`,
    },
    { apiName: this.apiName });

  getList = () =>
    this.restService.request<any, ListResultDto<ProductDto>>({
      method: 'GET',
      url: '/api/catalog/product',
    },
    { apiName: this.apiName });

  getListPaged = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<ProductDto>>({
      method: 'GET',
      url: '/api/catalog/product/paged',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: UpdateProductDto) =>
    this.restService.request<any, ProductDto>({
      method: 'PUT',
      url: `/api/catalog/product/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
