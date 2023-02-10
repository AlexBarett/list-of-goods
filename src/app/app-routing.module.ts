import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsListComponent } from './pages/goods-list/goods-list.component';
import { ProductCardComponent } from './pages/product-card/product-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/goods', pathMatch: 'full' },
  {
    path: 'goods',
    children: [
      { path: '', component: GoodsListComponent, pathMatch: 'full' },
      { path: ':id', component: ProductCardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
