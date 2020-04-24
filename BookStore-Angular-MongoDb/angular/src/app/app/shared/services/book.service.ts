import { RestService , PagedAndSortedResultRequestDto, PagedResultDto} from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BookDto, CreateUpdateBookDto} from '../models';

@Injectable({providedIn: 'root'})
export class BookService {
  apiName = 'Default';

  constructor(private restService: RestService) {}

 getById(id: string): Observable<BookDto> {
   return this.restService.request({ url: `/api/app/book/${id}`, method: 'GET' },{ apiName: this.apiName });
 }
 getListByInput(params = {} as PagedAndSortedResultRequestDto): Observable<PagedResultDto<BookDto>> {
   return this.restService.request({ url: '/api/app/book', method: 'GET', params },{ apiName: this.apiName });
 }
 createByInput(body: CreateUpdateBookDto): Observable<BookDto> {
   return this.restService.request({ url: '/api/app/book', method: 'POST', body },{ apiName: this.apiName });
 }
 updateByIdAndInput(body: CreateUpdateBookDto, id: string): Observable<BookDto> {
   return this.restService.request({ url: `/api/app/book/${id}`, method: 'PUT', body },{ apiName: this.apiName });
 }
 deleteById(id: string): Observable<void> {
   return this.restService.request({ url: `/api/app/book/${id}`, method: 'DELETE' },{ apiName: this.apiName });
 }
}
