import { inject, Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';

@Injectable({
  providedIn: 'root',
})
export class OrderingService {
  apiName = 'Ordering';
  private restService = inject(RestService);

  constructor() {}

  sample() {
    return this.restService.request<void, any>(
      { method: 'GET', url: '/api/ordering/example' },
      { apiName: this.apiName }
    );
  }
}
