import { NgModule, ɵnoSideEffects } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { NavComponent } from './component/nav/nav.component';
import { ProductsComponent } from './component/products/products.component';

import { AppHttpInterceptor } from './Services/httpInterceptor';
import { SnackBarService } from './Services/snack-bar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BookService } from './Services/book.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WishlistComponent,
    NavComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [BookService,
    SnackBarService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
