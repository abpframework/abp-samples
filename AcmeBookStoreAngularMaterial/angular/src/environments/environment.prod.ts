import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'AngularMaterial',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44354',
    redirectUri: baseUrl,
    clientId: 'AngularMaterial_App',
    responseType: 'code',
    scope: 'offline_access AngularMaterial',
  },
  apis: {
    default: {
      url: 'https://localhost:44354',
      rootNamespace: 'Acme.BookStore.AngularMaterial',
    },
  },
} as Environment;
