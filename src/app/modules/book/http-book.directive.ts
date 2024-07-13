import { HttpClient } from '@angular/common/http';
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appHttpBook]'
})
export class HttpBookDirective {
  
  @Output() appHttpBook = new EventEmitter()


  constructor(private http: HttpClient) { }


  @HostListener('input', ['$event']) loadBook(event: any){
    console.log("direct",event);
    const inputTextE: HTMLInputElement = event.target;
    this.http.get<any>(`https://www.melivecode.com/api/users?search=`+inputTextE.value)
    .subscribe(res=>this.appHttpBook.emit(res));

  }
}
