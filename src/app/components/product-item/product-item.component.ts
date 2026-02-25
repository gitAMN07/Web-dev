import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  selectedImageIndex = 0;
  liked = false;

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }

  like() {
    this.product.likes++;
    this.liked = true;

  setTimeout(() => {
    this.liked = false;
  }, 300);
  }

  remove() {
    if (confirm('Are you sure?')) {
      this.delete.emit(this.product.id);
    }
  }
}