import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApplicationConfigurationDto} from '../models';

@Injectable({providedIn: 'root'})
export class AbpApplicationConfigurationService {
  apiName = 'Default';

  constructor(private restService: RestService) {}

 get(): Observable<ApplicationConfigurationDto> {
   return this.restService.request({ url: '/api/abp/application-configuration', method: 'GET' },{ apiName: this.apiName });
 }
}
