import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IdentityUserService } from '@abp/ng.identity';

@Injectable({
  providedIn: 'root',
})
export class DevExtremeService {
  users$ = this.service
    .getList({ filter: '', maxResultCount: 10 })
    .pipe(map((result) => result.items));

  constructor(private service: IdentityUserService) {}
}
