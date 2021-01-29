import type { GetIdentitySecurityLogListInput, IdentitySecurityLogDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdentitySecurityLogService {
  apiName = 'AbpIdentity';

  get = (id: string) =>
    this.restService.request<any, IdentitySecurityLogDto>({
      method: 'GET',
      url: `/api/identity/security-logs/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: GetIdentitySecurityLogListInput) =>
    this.restService.request<any, PagedResultDto<IdentitySecurityLogDto>>({
      method: 'GET',
      url: `/api/identity/security-logs`,
      params: { startTime: input.startTime, endTime: input.endTime, applicationName: input.applicationName, identity: input.identity, action: input.action, userName: input.userName, clientId: input.clientId, correlationId: input.correlationId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getMy = (id: string) =>
    this.restService.request<any, IdentitySecurityLogDto>({
      method: 'GET',
      url: `/api/identity/security-logs/my/${id}`,
    },
    { apiName: this.apiName });

  getMyList = (input: GetIdentitySecurityLogListInput) =>
    this.restService.request<any, PagedResultDto<IdentitySecurityLogDto>>({
      method: 'GET',
      url: `/api/identity/security-logs/my`,
      params: { startTime: input.startTime, endTime: input.endTime, applicationName: input.applicationName, identity: input.identity, action: input.action, userName: input.userName, clientId: input.clientId, correlationId: input.correlationId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
