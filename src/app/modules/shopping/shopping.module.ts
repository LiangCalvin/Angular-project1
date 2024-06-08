import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ShoppingsearchComponent } from './shoppingsearch/shoppingsearch.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingcartComponent,
    ShoppingsearchComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule
  ],
  exports: [
    ShoppingcartComponent,
    ShoppingsearchComponent,
  ]
})
export class ShoppingModule { }
