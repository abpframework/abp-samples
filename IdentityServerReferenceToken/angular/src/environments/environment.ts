import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'IDSReferenceToken',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44322',
    redirectUri: baseUrl,
    clientId: 'IDSReferenceToken_App',
    responseType: 'code',
    scope: 'offline_access openid profile role email phone IDSReferenceToken',
  },
  apis: {
    default: {
      url: 'https://localhost:44322',
      rootNamespace: 'IDSReferenceToken',
    },
  },
} as Environment;
