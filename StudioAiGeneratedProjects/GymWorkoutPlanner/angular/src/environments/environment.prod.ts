import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44395/',
  redirectUri: baseUrl,
  clientId: 'GymWorkoutPlanner_App',
  responseType: 'code',
  scope: 'offline_access GymWorkoutPlanner',
  requireHttps: true,
};

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'GymWorkoutPlanner',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44395',
      rootNamespace: 'GymWorkoutPlanner',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
  },
} as Environment;
