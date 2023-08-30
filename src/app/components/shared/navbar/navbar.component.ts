import {Component} from '@angular/core';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    public cartService: CartService
  ) {
  }

}
