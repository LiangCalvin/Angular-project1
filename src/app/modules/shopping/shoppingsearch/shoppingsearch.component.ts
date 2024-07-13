import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { auditTime, debounceTime } from 'rxjs';

@Component({
  selector: 'app-shoppingsearch',
  templateUrl: './shoppingsearch.component.html',
  styleUrl: './shoppingsearch.component.css',

})
export class ShoppingsearchComponent {
  @Output() onInput = new EventEmitter<string>();
  @Output() onSearch = this.onInput.pipe(auditTime(400));
  // value: string | undefined;

  constructor() {}

  ngOnInit(): void {

  }

  inputSearch(text: string){
    this.onInput.emit(text);
    console.log("inputsearch:",text)
  }

}
