import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'lib-products',
  template: ` <p>products works!</p> `,
  styles: [],
})
export class ProductsComponent implements OnInit {
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.service.sample().subscribe(console.log);
  }
}
