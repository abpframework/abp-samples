import type { IsLinkedInput, LinkUserDto, LinkUserInput, UnLinkUserInput, VerifyLinkTokenInput } from './models';
import { RestService } from '@abp/ng.core';
import type { ListResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IdentityLinkUserService {
  apiName = 'AbpIdentity';

  generateLinkToken = () =>
    this.restService.request<any, string>({
      method: 'POST',
      responseType: 'text',
      url: `/api/identity/link-user/generate-link-token`,
    },
    { apiName: this.apiName });

  getAllList = () =>
    this.restService.request<any, ListResultDto<LinkUserDto>>({
      method: 'GET',
      url: `/api/identity/link-user`,
    },
    { apiName: this.apiName });

  isLinked = (input: IsLinkedInput) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: `/api/identity/link-user/is-linked`,
      body: input,
    },
    { apiName: this.apiName });

  link = (input: LinkUserInput) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/identity/link-user/link`,
      body: input,
    },
    { apiName: this.apiName });

  unlink = (input: UnLinkUserInput) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/identity/link-user/unlink`,
      body: input,
    },
    { apiName: this.apiName });

  verifyLinkToken = (token: VerifyLinkTokenInput) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: `/api/identity/link-user/verify-link-token`,
      body: token,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
