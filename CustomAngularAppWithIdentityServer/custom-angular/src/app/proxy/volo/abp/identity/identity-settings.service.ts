import type { IdentitySettingsDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdentitySettingsService {
  apiName = 'AbpIdentity';

  get = () =>
    this.restService.request<any, IdentitySettingsDto>({
      method: 'GET',
      url: `/api/identity/settings`,
    },
    { apiName: this.apiName });

  update = (input: IdentitySettingsDto) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/identity/settings`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
