import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'DevExtremeAngular',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44341',
    redirectUri: baseUrl,
    clientId: 'DevExtremeAngular_App',
    responseType: 'code',
    scope: 'offline_access DevExtremeAngular',
  },
  apis: {
    default: {
      url: 'https://localhost:44341',
      rootNamespace: 'DevExtremeAngular',
    },
  },
} as Environment;
