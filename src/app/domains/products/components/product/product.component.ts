import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '@shared/pipes/reverse.pipe';

@Component({
  selector: 'app-product',
  imports: [CommonModule, ReversePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler(){
    this.addToCart.emit(this.product);
  }
}
