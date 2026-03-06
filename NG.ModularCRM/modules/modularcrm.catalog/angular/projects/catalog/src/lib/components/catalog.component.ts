import { Component, OnInit, inject } from '@angular/core';
import { ProductDto, ProductService } from '../proxy';

@Component({
  selector: 'lib-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  products: ProductDto[] = [];

  protected readonly productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getList().subscribe(response => {
      this.products = response;
    });
  }
}
