import { Component } from '@angular/core';
import { AuthService, RestService } from '@abp/ng.core';
import { OAuthService } from 'angular-oauth2-oidc';

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
    private restService: RestService
  ) {}

  initLogin() {
    this.authService.initLogin();
  }

  retrieveUsers() {
    this.restService
      .request<any, any>({
        method: 'GET',
        url: '/api/identity/users',
      })
      .subscribe((result) => {
        this.users = result.items;
      });
  }
}
