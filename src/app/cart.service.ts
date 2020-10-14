import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = []; // define array to store product
  constructor(
    private http: HttpClient
  ) {}

  // add product to cart (store in array name items)
  addToCart(product){
    this.items.push(product);
  }

  // get product from array name items
  getItem(){
    return this.items;
  }

  // clear item from array
  clearCart(){
    this.items = [];
    return this.items;
  }

  getShipping(){
    return this.http.get('../assets/shipping.json');
  }
}
