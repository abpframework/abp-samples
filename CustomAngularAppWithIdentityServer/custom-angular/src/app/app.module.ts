import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AbpOAuthModule } from '@abp/ng.oauth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { registerLocale } from '@abp/ng.core/locale';
import { CoreModule } from '@abp/ng.core';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot({
      environment,
      registerLocaleFn: registerLocale(),
    }),
    NgxsModule.forRoot([]),
    AbpOAuthModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
