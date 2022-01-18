import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './component/nav/nav.component';
import { ProductsComponent } from './component/products/products.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [
  {
    path: 'wishlist', component: WishlistComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'nav', component: NavComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
