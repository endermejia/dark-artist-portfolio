import {Component} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {CartItemModel} from '../../models/product.model';
import {DialogService} from '../../services/dialog.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  constructor(
    public cartService: CartService,
    public dialogService: DialogService
  ) {
  }

  remove(cartItem: CartItemModel): void {
    this.dialogService.open(
      'Eliminar producto',
      `¿Estás seguro de que quieres eliminar el producto ${cartItem.name} talla ${cartItem.size}?`
    ).subscribe((confirm: boolean) => {
      if (confirm) {
        this.cartService.remove(cartItem);
      }
    });
  }
}
