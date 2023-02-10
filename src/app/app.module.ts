import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodsListModule } from './pages/goods-list/goods-list.module';
import { GoodsListService } from './services/goods-list.service';
import { BackendInterceptor } from './backend-mock/backend.interseptor';
import { ProductCardModule } from './pages/product-card/product-card.module';
import { TextareaResizeDirective } from './directives/textarea-resize.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoodsListModule,
    ProductCardModule,
    TextareaResizeDirective
  ],
  providers: [
    GoodsListService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
