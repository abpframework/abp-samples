import type { ClaimTypeDto, GetIdentityUsersInput, IdentityRoleDto, IdentityUserClaimDto, IdentityUserCreateDto, IdentityUserDto, IdentityUserUpdateDto, IdentityUserUpdatePasswordInput, IdentityUserUpdateRolesDto, OrganizationUnitDto, OrganizationUnitWithDetailsDto } from './models';
import { RestService } from '@abp/ng.core';
import type { ListResultDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdentityUserService {
  apiName = 'AbpIdentity';

  create = (input: IdentityUserCreateDto) =>
    this.restService.request<any, IdentityUserDto>({
      method: 'POST',
      url: `/api/identity/users`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/identity/users/${id}`,
    },
    { apiName: this.apiName });

  findByEmail = (email: string) =>
    this.restService.request<any, IdentityUserDto>({
      method: 'GET',
      url: `/api/identity/users/by-email/${email}`,
    },
    { apiName: this.apiName });

  findByUsername = (username: string) =>
    this.restService.request<any, IdentityUserDto>({
      method: 'GET',
      url: `/api/identity/users/by-username/${username}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, IdentityUserDto>({
      method: 'GET',
      url: `/api/identity/users/${id}`,
    },
    { apiName: this.apiName });

  getAllClaimTypes = () =>
    this.restService.request<any, ClaimTypeDto[]>({
      method: 'GET',
      url: `/api/identity/users/all-claim-types`,
    },
    { apiName: this.apiName });

  getAssignableRoles = () =>
    this.restService.request<any, ListResultDto<IdentityRoleDto>>({
      method: 'GET',
      url: `/api/identity/users/assignable-roles`,
    },
    { apiName: this.apiName });

  getAvailableOrganizationUnits = () =>
    this.restService.request<any, ListResultDto<OrganizationUnitWithDetailsDto>>({
      method: 'GET',
      url: `/api/identity/users/available-organization-units`,
    },
    { apiName: this.apiName });

  getClaims = (id: string) =>
    this.restService.request<any, IdentityUserClaimDto[]>({
      method: 'GET',
      url: `/api/identity/users/${id}/claims`,
    },
    { apiName: this.apiName });

  getList = (input: GetIdentityUsersInput) =>
    this.restService.request<any, PagedResultDto<IdentityUserDto>>({
      method: 'GET',
      url: `/api/identity/users`,
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getOrganizationUnits = (id: string) =>
    this.restService.request<any, OrganizationUnitDto[]>({
      method: 'GET',
      url: `/api/identity/users/${id}/organization-units`,
    },
    { apiName: this.apiName });

  getRoles = (id: string) =>
    this.restService.request<any, ListResultDto<IdentityRoleDto>>({
      method: 'GET',
      url: `/api/identity/users/${id}/roles`,
    },
    { apiName: this.apiName });

  getTwoFactorEnabled = (id: string) =>
    this.restService.request<any, boolean>({
      method: 'GET',
      url: `/api/identity/users/${id}/two-factor-enabled`,
    },
    { apiName: this.apiName });

  lock = (id: string, lockoutDuration: number) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/identity/users/${id}/lock/${lockoutDuration}`,
    },
    { apiName: this.apiName });

  setTwoFactorEnabled = (id: string, enabled: boolean) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/identity/users/${id}/two-factor/${enabled}`,
    },
    { apiName: this.apiName });

  unlock = (id: string) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/identity/users/${id}/unlock`,
    },
    { apiName: this.apiName });

  update = (id: string, input: IdentityUserUpdateDto) =>
    this.restService.request<any, IdentityUserDto>({
      method: 'PUT',
      url: `/api/identity/users/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  updateClaims = (id: string, input: IdentityUserClaimDto[]) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/identity/users/${id}/claims`,
      body: input,
    },
    { apiName: this.apiName });

  updatePassword = (id: string, input: IdentityUserUpdatePasswordInput) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/identity/users/${id}/change-password`,
      body: input,
    },
    { apiName: this.apiName });

  updateRoles = (id: string, input: IdentityUserUpdateRolesDto) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/identity/users/${id}/roles`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
