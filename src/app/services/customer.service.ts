import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  // getCustomersLarge(): Promise<Customer[]> {
  //   return this.http.get<Customer[]>('path-to-your-api/customers-large')
  //     .pipe(
  //       map(customers => customers.map(customer => {
  //         customer.date = new Date(customer.date); // Assuming date is part of the response
  //         return customer;
  //       }))
  //     )
  //     .toPromise();
  // }
}
