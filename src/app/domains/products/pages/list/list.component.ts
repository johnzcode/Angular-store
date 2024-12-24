import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Category } from '@shared/models/category.model';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { CategoryService } from '@shared/services/category.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  ngOnInit(){
    this.getProducts();
    this.getCategories();
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

  private getProducts(){
    this.productService.getProducts().subscribe({
        next: (products) => {
            this.products.set(products);
        },
        error: () => {
            
        }
    })
  }

  private getCategories(){
    this.categoryService.getAll().subscribe({
        next: (data) => {
            this.categories.set(data);
        },
        error: () => {
            
        }
    })
  }

}
