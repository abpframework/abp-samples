import { Component, OnInit } from '@angular/core';
import { ListService, PagedResultDto } from '@abp/ng.core';
import { BookDto, BookService } from '@proxy/books';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { BookDialogComponent } from './components/book-dialog/book-dialog.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [ListService]
})
export class BookComponent implements OnInit {

  book = { items: [], totalCount: 0 } as PagedResultDto<BookDto>;
  columns: string[] = ['name', 'type', 'price'];

  isModalOpen = false;

  constructor(public readonly list: ListService, private bookService: BookService, public dialog: MatDialog) {
    this.list.maxResultCount = 2;
  }

  ngOnInit() {
    const bookStreamCreator = (query) => this.bookService.getList(query);

    this.list.hookToQuery(bookStreamCreator).subscribe((response) => {
      this.book = response;
    });
  }

  changePage(pageEvent: PageEvent) {
    this.list.page = pageEvent.pageIndex;
  }

  changeSort(sort: Sort) {
    this.list.sortKey = sort.active;
    this.list.sortOrder = sort.direction;
  }

  createBook() {
    const dialogRef = this.dialog.open(BookDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bookService.create(result).subscribe(() => {
          this.list.get();
        });
      }
    });
  }



}
