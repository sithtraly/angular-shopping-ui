import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-shpping",
  templateUrl: "./shpping.component.html",
  styleUrls: ["./shpping.component.css"]
})
export class ShppingComponent implements OnInit {
  shippingCosts;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.shippingCosts = this.cartService.getShipping();
  }
}
