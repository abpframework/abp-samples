import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44321/',
  redirectUri: baseUrl,
  clientId: 'ModularCRM_App',
  responseType: 'code',
  scope: 'offline_access ModularCRM',
  requireHttps: true,
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'ModularCRM',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44321',
      rootNamespace: 'NG.ModularCRM',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;
