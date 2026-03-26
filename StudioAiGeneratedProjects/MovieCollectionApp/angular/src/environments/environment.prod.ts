import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44390/',
  redirectUri: baseUrl,
  clientId: 'MovieCollectionApp_App',
  responseType: 'code',
  scope: 'offline_access MovieCollectionApp',
  requireHttps: true,
};

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'MovieCollectionApp',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44390',
      rootNamespace: 'MovieCollectionApp',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
  remoteEnv: {
    url: '/getEnvConfig',
    mergeStrategy: 'deepmerge'
  }
} as Environment;
