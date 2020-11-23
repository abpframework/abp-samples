import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorWithBookComponent } from './author-with-book.component';

const routes: Routes = [{ path: '', component: AuthorWithBookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorWithBookRoutingModule { }
