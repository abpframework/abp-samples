import { AuthService } from '@abp/ng.core';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OAuthService } from 'angular-oauth2-oidc';
import { LocalizationPipe } from '@abp/ng.core';

@Component({
  selector: 'app-home',
  imports: [CommonModule, LocalizationPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private oAuthService = inject(OAuthService);
  private authService = inject(AuthService);

  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  login() {
    this.authService.navigateToLogin();
  }
}
