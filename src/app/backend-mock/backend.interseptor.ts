import { HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap, timer } from 'rxjs';

import { GoodsList, Product } from 'src/app/interfaces/product';
import { list } from './mock-data';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>): Observable<HttpResponse<GoodsList | Product | void>> {
    return timer(50).pipe(switchMap(() => {
      const url = req.url.split('goods/');

    if(req.method === 'POST') {
      this.updateProduct(req.body);
      return of(new HttpResponse<void>({ status: 200 }));
    }

    if (url.length > 1) {
      return of(new HttpResponse({ status: 200, body: list.find(o => o.id === url[url.length - 1]) }));
    }

    return of(new HttpResponse({ status: 200, body: list }));
    }))
  }

  private updateProduct(data: Product) {
    const index = list.findIndex(o => o.id === data.id);

    if (index < 0) {
      return;
    }

    list[index] = data;
  }
}
