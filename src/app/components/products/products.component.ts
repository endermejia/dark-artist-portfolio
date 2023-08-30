import {Component, OnInit} from '@angular/core';
import {PRODUCTS} from '../../mocks/global-info';
import {ProductModel} from '../../models/product.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: ProductModel[] = PRODUCTS;

  constructor(
    public cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.products.forEach((product) => {
      const selectedSize = product.stock.find((s) => s.size === product.selectedSize);
      if (!selectedSize) {
        product.selectedSize = product.stock[0].size;
      }
    });
  }

}
