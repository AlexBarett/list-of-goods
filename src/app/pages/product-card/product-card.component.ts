import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { GoodsListService } from 'src/app/services/goods-list.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  productDataForm: FormGroup;

  editMode: boolean = false;

  private data?: Product;

  constructor(
    private goodsService: GoodsListService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.productDataForm = this.fb.group({
      id: '',
      name: '',
      description: ''
    });
    this.productDataForm.disable();
  }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => this.goodsService.getProduct(params['id']))
    ).subscribe(data => {
      this.data = data;
      this.resetForm();
    });

  }

  back() {
    this.location.historyGo.length > 0
      ? this.location.back()
      : this.router.navigate([''], { relativeTo: this.route.parent })
  }

  cancel() {
    this.switchMode();
    this.resetForm();
  }

  switchMode() {
    this.editMode = !this.editMode;
    this.productDataForm[this.editMode ? 'enable' : 'disable']();
  }

  save() {
    this.goodsService.updateGoods(this.productDataForm.value).subscribe(() => {
      this.data = this.productDataForm.value;
      this.switchMode();
    });
  }

  private resetForm() {
    this.productDataForm.setValue(this.data || {});
  }
}
