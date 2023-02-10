import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GoodsList, Product } from 'src/app/interfaces/product';

@Injectable()
export class GoodsListService {

  constructor(private http: HttpClient) {}

  getGoodsList(): Observable<GoodsList> {
    return this.http.get<GoodsList>('goods');
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`goods/${id}`);
  }

  updateGoods(data: any): Observable<void> {
    const id = data.id;
    return this.http.post<void>(`${id}`, data);
  }
}
