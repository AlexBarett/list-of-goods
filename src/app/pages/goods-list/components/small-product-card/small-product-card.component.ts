import { Component, Input } from '@angular/core';

import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-small-product-card',
  templateUrl: './small-product-card.component.html',
  styleUrls: ['./small-product-card.component.scss']
})
export class SmallProductCardComponent {

  @Input()
  data!: Product;

}
