import { ShoppingCart } from '../../models/shopping-cart';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Products } from '../../models/products';
import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  products$;
  @Input('products') product: Products;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService,) {
   }

  addToCart(size) {
    console.log(size);
    this.cartService.addToCart(this.product, size);
  }
}
