import { Environment } from '@abp/ng.core';

const baseUrl = 'https://{0}.ng.getabp.net:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://{0}.api.getabp.net:44301/',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    skipIssuerCheck: true,
    responseType: 'code',
    scope: 'BookStore',
  },
  apis: {
    default: {
      url: 'https://{0}.api.getabp.net:44301',
      rootNamespace: 'BookStore',
    },
  },
} as Environment;
