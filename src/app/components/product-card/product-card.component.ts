import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],   // ВОТ ЭТО ОБЯЗАТЕЛЬНО
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Product;

  selectedImage!: string;

  ngOnInit() {
    this.selectedImage = this.product.images[0];
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  likeProduct() {
    this.product.likes++;
  }
}