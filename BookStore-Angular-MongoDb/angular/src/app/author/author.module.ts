import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';

@NgModule({
  declarations: [AuthorComponent],
  imports: [SharedModule, AuthorRoutingModule],
})
export class AuthorModule {}
