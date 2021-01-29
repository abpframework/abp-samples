import type { ClaimTypeDto, CreateClaimTypeDto, GetIdentityClaimTypesInput, UpdateClaimTypeDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdentityClaimTypeService {
  apiName = 'AbpIdentity';

  create = (input: CreateClaimTypeDto) =>
    this.restService.request<any, ClaimTypeDto>({
      method: 'POST',
      url: `/api/identity/claim-types`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/identity/claim-types/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, ClaimTypeDto>({
      method: 'GET',
      url: `/api/identity/claim-types/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: GetIdentityClaimTypesInput) =>
    this.restService.request<any, PagedResultDto<ClaimTypeDto>>({
      method: 'GET',
      url: `/api/identity/claim-types`,
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: UpdateClaimTypeDto) =>
    this.restService.request<any, ClaimTypeDto>({
      method: 'PUT',
      url: `/api/identity/claim-types/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
