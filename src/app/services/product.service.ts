import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<Category[]>(`${this.BASE_URL}/categories/`);
  }

  getProducts() {
    return this.http.get<Product[]>(`${this.BASE_URL}/products/`);
  }

  getProductsByCategory(categoryId: number) {
    return this.http.get<Product[]>(`${this.BASE_URL}/categories/${categoryId}/products/`);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.BASE_URL}/products/${id}/`);
  }
}