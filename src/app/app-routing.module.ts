import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactComponent} from './components/contact/contact.component';
import {CartComponent} from './components/cart/cart.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ProductsComponent} from './components/products/products.component';


const routes: Routes = [
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: '', redirectTo: '/products', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
