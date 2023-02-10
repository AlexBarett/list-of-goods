import { Component, OnInit } from '@angular/core';

import { GoodsList } from 'src/app/interfaces/product';
import { GoodsListService } from 'src/app/services/goods-list.service';


@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {

  filteredGoods?: GoodsList;

  filterDirection: 'up' | 'down' = 'up';
  filterName: string = '';

  private goods?: GoodsList;

  constructor(private goodsService: GoodsListService) { }

  ngOnInit() {
    this.loadFilter();
    this.getGoods();
  }

  switchFilter() {
    this.filterDirection = this.filterDirection === 'up' ? 'down' : 'up';
    localStorage.setItem('goods-list-filter', this.filterDirection);
    this.applyFilters();
  }

  changeFilterName() {
    sessionStorage.setItem('goods-list-filter-name', this.filterName)
    this.applyFilters();
  }

  private loadFilter() {
    const
      filterName = sessionStorage.getItem('goods-list-filter-name') || '',
      filterDir = localStorage.getItem('goods-list-filter');

    this.filterDirection = (filterDir !== 'up' && filterDir !== 'down') ? 'up' : filterDir;
    this.filterName = filterName;
  }

  private applyFilters() {
    let goods = [...(this.goods || [])];

    if (this.filterName) {
      goods = goods.filter(product => (product.name as string).toLocaleLowerCase().includes(this.filterName));
    }

    goods.sort((a, b) => (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1) * (this.filterDirection === 'up' ? 1 : -1));
    this.filteredGoods = goods;
  }

  private getGoods() {
    this.goodsService.getGoodsList().subscribe(goods => {
      this.goods = goods;
      this.applyFilters();
    })
  }
}
