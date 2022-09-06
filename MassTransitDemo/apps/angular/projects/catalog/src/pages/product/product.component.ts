import { ListService } from '@abp/ng.core';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { eCatalogPolicyNames } from '@eshoponabp/catalog/config';
import { finalize } from 'rxjs/operators';
import { ProductDto } from '../../lib/proxy/products/models';
import { ProductService } from '../../lib/proxy/products/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ListService],
})
export class ProductComponent implements OnInit {
  permissions = {
    create: eCatalogPolicyNames.ProductManagementCreate,
    update: eCatalogPolicyNames.ProductManagementUpdate,
    delete: eCatalogPolicyNames.ProductManagementDelete,
  };

  items: ProductDto[] = [];
  count = 0;

  selected: ProductDto;

  isModalVisible: boolean;

  modalBusy = false;

  form: FormGroup;
  constructor(
    public readonly list: ListService,
    private readonly service: ProductService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder
  ) {
    this.list.maxResultCount = 10;
  }

  ngOnInit(): void {
    const productStreamCreator = query => this.service.getListPaged(query);

    this.list.hookToQuery(productStreamCreator).subscribe(response => {
      this.items = response.items;
      this.count = response.totalCount;
    });
  }

  buildForm() {
    this.form = this.fb.group({
      name: [this.selected.name, { validators: [Validators.required] }],
      code: [this.selected.code, { validators: [Validators.required] }],
      imageName: [this.selected.imageName, { validators: [Validators.required] }],
      price: [this.selected.price, { validators: [Validators.required] }],
      stockCount: [this.selected.stockCount, { validators: [Validators.required] }],
    });
  }

  onEdit(product: ProductDto) {
    this.selected = product;
    this.openModal();
  }

  onCreate() {
    this.selected = {} as ProductDto;
    this.openModal();
  }

  openModal() {
    this.isModalVisible = true;
    this.buildForm();
  }

  onDelete(product: ProductDto) {
    this.confirmationService
      .warn('CatalogService::ProductDeletionConfirmationMessage', 'AbpUi::AreYouSure', {
        messageLocalizationParams: [product.name],
      })
      .subscribe((status: Confirmation.Status) => {
        if (status === Confirmation.Status.confirm) {
          this.service.delete(product.id).subscribe(() => this.list.get());
        }
      });
  }

  save() {
    if (!this.form.valid || this.modalBusy) {
      return;
    }
    this.modalBusy = true;

    const { id } = this.selected;
    (id
      ? this.service.update(id, {
          ...this.selected,
          ...this.form.value,
        })
      : this.service.create({ ...this.form.value })
    )
      .pipe(finalize(() => (this.modalBusy = false)))
      .subscribe(() => {
        this.isModalVisible = false;
        this.list.get();
      });
  }
}
