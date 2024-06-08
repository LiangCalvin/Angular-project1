import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrl: './shoppingcart.component.css'
})
export class ShoppingcartComponent implements OnInit {

  @Input() value = 0;
  constructor() {}

  ngOnInit(): void {
      
  }
  
}
