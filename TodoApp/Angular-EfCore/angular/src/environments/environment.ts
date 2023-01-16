import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'TodoApp',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44319/',
    redirectUri: baseUrl,
    clientId: 'TodoApp_App',
    responseType: 'code',
    scope: 'offline_access TodoApp',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44319',
      rootNamespace: 'TodoApp',
    },
  },
} as Environment;
