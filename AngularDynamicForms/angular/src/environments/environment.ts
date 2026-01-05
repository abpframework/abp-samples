import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44314/',
  redirectUri: baseUrl,
  clientId: 'aspnet_App',
  responseType: 'code',
  scope: 'offline_access aspnet',
  requireHttps: true,
  impersonation: {
    userImpersonation: true,
  }
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'aspnet',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44314',
      rootNamespace: 'aspnet',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;
