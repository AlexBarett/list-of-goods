import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GoodsListComponent } from './goods-list.component';
import { SmallProductCardComponent } from './components/small-product-card/small-product-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    GoodsListComponent,
    SmallProductCardComponent
  ]
})
export class GoodsListModule { }
