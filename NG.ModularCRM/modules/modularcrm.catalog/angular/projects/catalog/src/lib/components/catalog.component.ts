import { Component, inject } from '@angular/core';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'lib-catalog',
  template: ` <p>catalog works!</p> `,
})
export class CatalogComponent {
  protected readonly service = inject(CatalogService);

  constructor() {
    this.service.sample().subscribe(console.log);
  }
}
