import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { GetIdentityUsersInput, IdentityUserDto, IdentityUserService } from '@abp/ng.identity/proxy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DevExtremeService {
  input: GetIdentityUsersInput = {
    filter: '',
    maxResultCount: 10
  };
   
  constructor(private service: IdentityUserService) { }

  getUsers(): Observable<IdentityUserDto[]> {
    return this.service.getList(this.input).pipe(map((response) => response.items));
  }
}
