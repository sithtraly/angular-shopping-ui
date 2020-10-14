import { Component, OnInit } from "@angular/core";
import { FormBuilder } from '@angular/forms';
import { environment } from "../../environments/environment";

import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      phone: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItem();
  }

  onSubmit(customerData){
    // Process checkout data
    environment.production? null : console.log(customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
