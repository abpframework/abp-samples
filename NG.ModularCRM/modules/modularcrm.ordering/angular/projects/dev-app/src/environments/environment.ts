import { Environment } from '@abp/ng.core';

/**
 * This env exits because of proxy generation with @abp/ng.schematics,
 * after provide running without env in schematics we can delete this file
 */
export const environment = {
  production: false,
  application: {
    name: '',
  },
  apis: {
    default: {
      url: '',
      rootNamespace: 'ModularCrm.Ordering',
    },
  },
} as Environment;
