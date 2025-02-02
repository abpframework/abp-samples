import { TestBed } from '@angular/core/testing';
import { ProductsService } from './services/products.service';
import { RestService } from '@abp/ng.core';

describe('ProductsService', () => {
  let service: ProductsService;
  const mockRestService = jasmine.createSpyObj('RestService', ['request']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: RestService,
          useValue: mockRestService,
        },
      ],
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
