import { inject, Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  apiName = 'Catalog';
  private restService = inject(RestService);

  constructor() {}

  sample() {
    return this.restService.request<void, any>(
      { method: 'GET', url: '/api/catalog/example' },
      { apiName: this.apiName }
    );
  }
}
