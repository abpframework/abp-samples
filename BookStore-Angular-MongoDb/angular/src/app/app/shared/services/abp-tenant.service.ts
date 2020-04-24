import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {FindTenantResultDto} from '../models';

@Injectable({providedIn: 'root'})
export class AbpTenantService {
  apiName = 'Default';

  constructor(private restService: RestService) {}

 findTenantByNameByName(name: string): Observable<FindTenantResultDto> {
   return this.restService.request({ url: `/api/abp/multi-tenancy/tenants/by-name/${name}`, method: 'GET' },{ apiName: this.apiName });
 }
 findTenantByIdById(id: string): Observable<FindTenantResultDto> {
   return this.restService.request({ url: `/api/abp/multi-tenancy/tenants/by-id/${id}`, method: 'GET' },{ apiName: this.apiName });
 }
}
