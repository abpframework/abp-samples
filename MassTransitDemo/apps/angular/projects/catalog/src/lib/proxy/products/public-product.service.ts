import type { ProductDto } from './models';
import { RestService } from '@abp/ng.core';
import type { ListResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PublicProductService {
  apiName = 'Catalog';

  get = (id: string) =>
    this.restService.request<any, ProductDto>({
      method: 'GET',
      url: `/api/catalog/public-product/${id}`,
    },
    { apiName: this.apiName });

  getList = () =>
    this.restService.request<any, ListResultDto<ProductDto>>({
      method: 'GET',
      url: '/api/catalog/public-product',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
