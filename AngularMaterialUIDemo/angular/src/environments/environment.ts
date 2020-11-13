import { Config } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'AngularMaterialUIDemo',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44315',
    redirectUri: baseUrl,
    clientId: 'AngularMaterialUIDemo_App',
    responseType: 'code',
    scope: 'offline_access AngularMaterialUIDemo',
  },
  apis: {
    default: {
      url: 'https://localhost:44315',
      rootNamespace: 'AngularMaterialUIDemo',
    },
  },
} as Config.Environment;
