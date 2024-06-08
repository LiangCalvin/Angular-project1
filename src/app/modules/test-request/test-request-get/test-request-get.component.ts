import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/test-req-get';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Table } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../../../services/customer.service';
import { Customer, Product } from '../../../models/customer';
import { Respresentative } from '../../../models/representative';
@Component({
  selector: 'app-test-request-get',
  templateUrl: './test-request-get.component.html',
  styleUrl: './test-request-get.component.css',
  providers: [CustomerService]

})
export class TestRequestGetComponent implements OnInit{
  products!: Product[];

  customers!: Customer[];

  representatives!: Respresentative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];


  value: string | undefined;
  bookList: Book[] = [];
  constructor(private customerService: CustomerService, private http: HttpClient) {}
  
  ngOnInit() {


  this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
  ];

  this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
  ];

  this.products = [
    { 
      code: 1888,
      name: "Kime",
      category: "food",
      quantity: 3
    },
    { 
      code: 1888,
      name: "Kime",
      category: "food",
      quantity: 3
    },{ 
      code: 1888,
      name: "Kime",
      category: "food",
      quantity: 3
    },{ 
      code: 1888,
      name: "Kime",
      category: "food",
      quantity: 3
    },
  ]


}

  searchBook(searchTerm: string){
    const url = `https://www.anapioficeandfire.com/api/books`;
    this.http.get<Book[]>(url)
    .subscribe(data => {
      const filteredBooks = data.filter(book =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.bookList = filteredBooks;
    });
  }

  clear(table: Table) {
    table.clear();
}

}
