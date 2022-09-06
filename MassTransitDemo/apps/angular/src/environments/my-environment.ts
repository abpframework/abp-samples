import { Environment } from '@abp/ng.core';

export interface MyEnvironment extends Environment {
  mediaServerUrl?: string;
}
