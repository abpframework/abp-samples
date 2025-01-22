import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44362/',
  redirectUri: baseUrl,
  clientId: 'ModularCrm_App',
  responseType: 'code',
  scope: 'offline_access ModularCrm',
  requireHttps: true,
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'ModularCrm',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44362',
      rootNamespace: 'ModularCrm',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;
