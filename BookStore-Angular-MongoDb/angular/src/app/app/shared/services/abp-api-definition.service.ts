import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApplicationApiDescriptionModelRequestDto, ApplicationApiDescriptionModel} from '../models';

@Injectable({providedIn: 'root'})
export class AbpApiDefinitionService {
  apiName = 'Default';

  constructor(private restService: RestService) {}

 getByModel(params = {} as ApplicationApiDescriptionModelRequestDto): Observable<ApplicationApiDescriptionModel> {
   return this.restService.request({ url: '/api/abp/api-definition', method: 'GET', params },{ apiName: this.apiName });
 }
}
