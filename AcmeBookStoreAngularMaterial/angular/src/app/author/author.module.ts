import { NgModule } from '@angular/core';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import { SharedModule } from '../shared/shared.module';
import { AuthorDialogComponent } from './components/author-dialog/author-dialog.component';

@NgModule({
  declarations: [AuthorComponent, AuthorDialogComponent],
  imports: [
    SharedModule,
    AuthorRoutingModule
  ]
})
export class AuthorModule { }
