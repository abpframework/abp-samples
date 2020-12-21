import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { AuthorDto, AuthorService } from '@proxy/authors';
import { FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AuthorDialogComponent } from './components/author-dialog/author-dialog.component';
import { ConfirmationDialogComponent } from '../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
  providers: [ListService],
})
export class AuthorComponent implements OnInit {
  author = { items: [], totalCount: 0 } as PagedResultDto<AuthorDto>;

  form: FormGroup;

  columns = ['actions', 'name', 'birthDate'];

  constructor(
    public readonly list: ListService,
    private authorService: AuthorService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const authorStreamCreator = (query) => this.authorService.getList(query);

    this.list.hookToQuery(authorStreamCreator).subscribe((response) => {
      this.author = response;
    });
  }

  changePage(pageEvent: PageEvent) {
    this.list.page = pageEvent.pageIndex;
  }


  changeSort(sort: Sort) {
    this.list.sortKey = sort.active;
    this.list.sortOrder = sort.direction;
  }

  createAuthor() {
    const dialogRef = this.dialog.open(AuthorDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authorService.create(result).subscribe(() => {
          this.list.get();
        });
      }
    });
  }

  editAuthor(id: any) {
    this.authorService.get(id).subscribe((author) => {
      const dialogRef = this.dialog.open(AuthorDialogComponent, {
        data: author
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.authorService.update(id, result).subscribe(() => {
            this.list.get();
          });
        }
      });
    });
  }

  deleteAuthor(id: string) {
    const confirmationDialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: '::AreYouSure',
        description: '::AreYouSureToDelete'
      }
    });
    confirmationDialogRef.afterClosed().subscribe(confirmationResult => {
      if (confirmationResult) {
        this.authorService.delete(id).subscribe(() => this.list.get());
      }
    });
  }
}
