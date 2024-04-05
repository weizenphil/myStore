import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../model/product';
import { CartService } from '../../service/cart.service';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pageTitle: string = 'My Store';
  cartProductList!: Product[];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartProductList = this.cartService.getCartProduct();
    this.calculate(this.cartProductList);
  }

  calculate(cart: Product[]) {
    let sum = 0;
    cart.forEach((item) => {
      sum += Number(item.amount);
    });
    const ele = document.getElementById('cartAmount') as HTMLElement;
    ele.innerHTML = sum.toString();
  }
}