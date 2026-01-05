import { Routes } from '@angular/router';

export const GDPR_COOKIE_CONSENT_ROUTES: Routes = [
  {
    path: 'privacy',
    loadComponent: () =>
      import('./privacy-policy/privacy-policy.component').then(c => c.PrivacyPolicyComponent),
  },
  {
    path: 'cookie',
    loadComponent: () =>
      import('./cookie-policy/cookie-policy.component').then(c => c.CookiePolicyComponent),
  },
];