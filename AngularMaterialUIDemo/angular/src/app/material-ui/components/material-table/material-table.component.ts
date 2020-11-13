import { Component } from '@angular/core';
import { TableService } from '../../services/table.service';
import { ListService } from '@abp/ng.core';
import { PageEvent } from '@angular/material/paginator/paginator';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss'],
  providers: [TableService, ListService]
})
export class MaterialTableComponent{
  myDataArray: Array<any>;
  columns: string[] = ['userName', 'name', 'email'];

  constructor(public tableService: TableService) {
    this.tableService.maxResultCount = 2;
  }

  changePage(pageEvent: PageEvent) {
    this.tableService.page = pageEvent.pageIndex;
  }

  changeSort(sort: Sort) {
    this.tableService.sort = sort.active;
    this.tableService.sortOrder = sort.direction;
  }
}
