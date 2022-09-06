import { MyEnvironment } from './my-environment';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'EShopOnAbp',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44330',
    redirectUri: baseUrl,
    clientId: 'Web',
    responseType: 'code',
    scope: 'offline_access openid profile email phone AccountService IdentityService AdministrationService CatalogService OrderingService',
    //requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44372',
      rootNamespace: 'EShopOnAbp',
    },
    Catalog: {
      url: 'https://localhost:44354',
      rootNamespace: 'EShopOnAbp.CatalogService',
    },
    Ordering: {
      url: "https://localhost:44356",
      rootNamespace: 'EShopOnAbp.OrderingService',
    }
  },
  mediaServerUrl:'https://localhost:44335'
} as MyEnvironment;


