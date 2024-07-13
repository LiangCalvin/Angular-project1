import { Component } from '@angular/core';
import { Product } from './models/product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  products: Product[] = [];
  filterProducts: Product[] = this.products;


  constructor(private http: HttpClient){
    this.http.get<Product[]>(`/api/product`).subscribe((res)=>{
      console.log(res);
      this.products = res;
      this.filterProducts = this.products;
    })
    console.log(environment.production); // Logs false for development environment

  }

  searchProduct(text: string){
    this.filterProducts = this.products.filter(product=>{
      const productName = product.name.toLowerCase();
      const searchName = text.toLowerCase();
      return productName.indexOf(searchName) !== -1
    })

  }
}
