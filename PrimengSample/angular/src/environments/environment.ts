import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'AbpPrimengSample',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44368',
    redirectUri: baseUrl,
    clientId: 'AbpPrimengSample_App',
    responseType: 'code',
    scope: 'offline_access openid profile role email phone AbpPrimengSample',
  },
  apis: {
    default: {
      url: 'https://localhost:44368',
      rootNamespace: 'AbpPrimengSample',
    },
  },
} as Environment;
