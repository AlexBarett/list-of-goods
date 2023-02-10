import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TextareaResizeDirective } from 'src/app/directives/textarea-resize.directive';
import { ProductCardComponent } from './product-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TextareaResizeDirective
  ],
  declarations: [ProductCardComponent]
})
export class ProductCardModule { }
