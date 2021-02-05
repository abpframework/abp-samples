import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'CustomAngularAppWithIdentityServer',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44314',
    redirectUri: baseUrl,
    clientId: 'CustomAngularAppWithIdentityServer_App',
    responseType: 'code',
    scope: 'offline_access CustomAngularAppWithIdentityServer',
  },
  apis: {
    default: {
      url: 'https://localhost:44314',
      rootNamespace: 'CustomAngularAppWithIdentityServer',
    },
  },
} as Environment;
