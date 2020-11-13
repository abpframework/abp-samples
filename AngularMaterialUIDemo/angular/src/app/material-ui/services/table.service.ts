import { Injectable } from '@angular/core';
import { IdentityService } from '@abp/ng.identity';
import { ListService } from '@abp/ng.core';

@Injectable()
export class TableService {
  users$ = this.listService.hookToQuery(query => this.identityService.getUsers(query));

  set page(page) {
    this.listService.page = page;
  }
  get page() {
    return this.listService.page;
  }

  get maxResultCount() {
    return this.listService.maxResultCount;
  }

  set maxResultCount(count: number){
    this.listService.maxResultCount = count;
  }

  set sort(val) {
    this.listService.sortKey = val;
  }

  set sortOrder(val) {
    this.listService.sortOrder = val;
  }

  constructor(private identityService: IdentityService, private listService: ListService) {}
}
