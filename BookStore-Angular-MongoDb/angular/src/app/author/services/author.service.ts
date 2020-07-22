import { RestService , PagedResultDto} from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AuthorDto, GetAuthorListDto, CreateAuthorDto, UpdateAuthorDto} from '../models';

@Injectable({providedIn: 'root'})
export class AuthorService {
  apiName = 'Default';

  constructor(private restService: RestService) {}

 getById(id: string): Observable<AuthorDto> {
   return this.restService.request({ url: `/api/app/author/${id}`, method: 'GET' },{ apiName: this.apiName });
 }
 getListByInput(params = {} as GetAuthorListDto): Observable<PagedResultDto<AuthorDto>> {
   return this.restService.request({ url: '/api/app/author', method: 'GET', params },{ apiName: this.apiName });
 }
 createByInput(body: CreateAuthorDto): Observable<AuthorDto> {
   return this.restService.request({ url: '/api/app/author', method: 'POST', body },{ apiName: this.apiName });
 }
 updateByIdAndInput(body: UpdateAuthorDto, id: string): Observable<void> {
   return this.restService.request({ url: `/api/app/author/${id}`, method: 'PUT', body },{ apiName: this.apiName });
 }
 deleteById(id: string): Observable<void> {
   return this.restService.request({ url: `/api/app/author/${id}`, method: 'DELETE' },{ apiName: this.apiName });
 }
}
