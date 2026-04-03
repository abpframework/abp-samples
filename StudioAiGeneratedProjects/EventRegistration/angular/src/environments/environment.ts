import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44382/',
  redirectUri: baseUrl,
  clientId: 'EventRegistration_App',
  responseType: 'code',
  scope: 'offline_access EventRegistration',
  requireHttps: true,
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'EventRegistration',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44382',
      rootNamespace: 'EventRegistration',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;
