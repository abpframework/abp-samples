import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl: 'http://localhost:4200/',
    name: 'Products',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44301/',
    redirectUri: baseUrl,
    clientId: 'Products_App',
    responseType: 'code',
    scope: 'offline_access Products',
    requireHttps: true,
    impersonation: {
      userImpersonation: true,
    }
  },
  apis: {
    default: {
      url: 'https://localhost:44301',
      rootNamespace: 'ModularCrm.Products',
    },
    Products: {
      url: 'https://localhost:44300',
      rootNamespace: 'ModularCrm.Products',
    },
  },
} as Environment;
