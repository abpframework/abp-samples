import { Component } from '@angular/core';
import { AuthService, RestService } from '@abp/ng.core';
import { OAuthService } from 'angular-oauth2-oidc';
import { IdentityUserService } from './proxy/volo/abp/identity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'custom-angular';

  users = [];

  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  constructor(
    private oAuthService: OAuthService,
    private authService: AuthService,
    private identityService: IdentityUserService
  ) {}

  initLogin() {
    this.authService.navigateToLogin();
  }

  retrieveUsers() {
    this.identityService.getList({ maxResultCount: 10 }).subscribe((result) => {
      this.users = result.items;
    });
  }
}
