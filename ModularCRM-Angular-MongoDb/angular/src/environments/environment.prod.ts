import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:/',
  redirectUri: baseUrl,
  clientId: 'ModularCrm_App',
  responseType: 'code',
  scope: 'offline_access ModularCrm',
  requireHttps: true,
};

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'ModularCrm',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:',
      rootNamespace: 'ModularCrm',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;
