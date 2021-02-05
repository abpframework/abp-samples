import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
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
    scope: 'offline_access openid profile role email phone CustomAngularAppWithIdentityServer',
  },
  apis: {
    default: {
      url: 'https://localhost:44314',
      rootNamespace: 'CustomAngularAppWithIdentityServer',
    },
  },
} as Environment;
