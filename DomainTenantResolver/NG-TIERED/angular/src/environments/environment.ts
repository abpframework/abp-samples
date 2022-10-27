import { Environment } from '@abp/ng.core';

const baseUrl = 'https://{0}.ng.getabp.net:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://{0}.ids.getabp.net:44301',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://{0}.api.getabp.net:44302',
      rootNamespace: 'BookStore',
    },
  },
} as Environment;
