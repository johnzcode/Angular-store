import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

    @Input() id?: string;
    product = signal<Product | null>(null);
    private productService = inject(ProductService);

    ngOnInit(){
        if (this.id){
            this.productService.getOne(this.id).subscribe({
                next: (product) => {
                    this.product.set(product);
                }
            });
        }
    }

}
