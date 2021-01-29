import type { GetAvailableRolesInput, GetAvailableUsersInput, GetIdentityUsersInput, GetOrganizationUnitInput, IdentityRoleDto, IdentityUserDto, OrganizationUnitCreateDto, OrganizationUnitMoveInput, OrganizationUnitRoleInput, OrganizationUnitUpdateDto, OrganizationUnitUserInput, OrganizationUnitWithDetailsDto } from './models';
import { RestService } from '@abp/ng.core';
import type { ListResultDto, PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrganizationUnitService {
  apiName = 'AbpIdentity';

  addMembers = (id: string, input: OrganizationUnitUserInput) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/identity/organization-units/${id}/members`,
      body: input,
    },
    { apiName: this.apiName });

  addRoles = (id: string, input: OrganizationUnitRoleInput) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/identity/organization-units/${id}/roles`,
      body: input,
    },
    { apiName: this.apiName });

  create = (input: OrganizationUnitCreateDto) =>
    this.restService.request<any, OrganizationUnitWithDetailsDto>({
      method: 'POST',
      url: `/api/identity/organization-units`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/identity/organization-units`,
      params: { id: id },
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, OrganizationUnitWithDetailsDto>({
      method: 'GET',
      url: `/api/identity/organization-units/${id}`,
    },
    { apiName: this.apiName });

  getAvailableRoles = (input: GetAvailableRolesInput) =>
    this.restService.request<any, PagedResultDto<IdentityRoleDto>>({
      method: 'GET',
      url: `/api/identity/organization-units/available-roles`,
      params: { filter: input.filter, id: input.id, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getAvailableUsers = (input: GetAvailableUsersInput) =>
    this.restService.request<any, PagedResultDto<IdentityUserDto>>({
      method: 'GET',
      url: `/api/identity/organization-units/available-users`,
      params: { filter: input.filter, id: input.id, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getList = (input: GetOrganizationUnitInput) =>
    this.restService.request<any, PagedResultDto<OrganizationUnitWithDetailsDto>>({
      method: 'GET',
      url: `/api/identity/organization-units`,
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getListAll = () =>
    this.restService.request<any, ListResultDto<OrganizationUnitWithDetailsDto>>({
      method: 'GET',
      url: `/api/identity/organization-units/all`,
    },
    { apiName: this.apiName });

  getMembers = (id: string, input: GetIdentityUsersInput) =>
    this.restService.request<any, PagedResultDto<IdentityUserDto>>({
      method: 'GET',
      url: `/api/identity/organization-units/${id}/members`,
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getRoles = (id: string, input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<IdentityRoleDto>>({
      method: 'GET',
      url: `/api/identity/organization-units/${id}/roles`,
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, sorting: input.sorting },
    },
    { apiName: this.apiName });

  move = (id: string, input: OrganizationUnitMoveInput) =>
    this.restService.request<any, void>({
      method: 'PUT',
      url: `/api/identity/organization-units/${id}/move`,
      body: input,
    },
    { apiName: this.apiName });

  removeMember = (id: string, memberId: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/identity/organization-units/${id}/members/${memberId}`,
    },
    { apiName: this.apiName });

  removeRole = (id: string, roleId: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/identity/organization-units/${id}/roles/${roleId}`,
    },
    { apiName: this.apiName });

  update = (id: string, input: OrganizationUnitUpdateDto) =>
    this.restService.request<any, OrganizationUnitWithDetailsDto>({
      method: 'PUT',
      url: `/api/identity/organization-units/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
