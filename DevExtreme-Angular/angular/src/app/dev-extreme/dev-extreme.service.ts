import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IdentityService } from '@abp/ng.identity';

@Injectable({
  providedIn: 'root',
})
export class DevExtremeService {
  users$ = this.service.getUsers().pipe(map((result) => result.items));

  constructor(private service: IdentityService) {}
}
