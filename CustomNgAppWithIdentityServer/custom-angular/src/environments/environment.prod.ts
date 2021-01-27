import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'CustomNgAppWithIdentityServer',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44308',
    redirectUri: baseUrl,
    clientId: 'CustomNgAppWithIdentityServer_App',
    responseType: 'code',
    scope: 'offline_access CustomNgAppWithIdentityServer',
  },
  apis: {
    default: {
      url: 'https://localhost:44308',
      rootNamespace: 'CustomNgAppWithIdentityServer',
    },
  },
} as Environment;
