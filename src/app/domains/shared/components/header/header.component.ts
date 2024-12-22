import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router, RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;
  showHeader = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      // Oculta el header si la ruta activa es /404
      const currentRoute = this.router.url;
      this.showHeader = currentRoute !== '/404';
    });
  }

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState);
  }
}
