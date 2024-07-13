import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormsModule, ValidatorFn, Validators } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html',
  styleUrl: './form01.component.css',


})
export class Form01Component {
  // value1: string | undefined;
  // value2: string | undefined;
  // messages: Message[] = [];
  // bmi = 0;
  // weightF = new FormControl(null, Validators.required);
  // heightF = new FormControl(null,Validators.required);
  // emailF = new FormControl('', [Validators.required, Validators.email]);

  
  idCardValidator: ValidatorFn = (control: AbstractControl) => {
    const idCard: string | null = control.value;
    if (idCard) {
      if (idCard.length !== 13) {
        return {idCard : true};
      }
    
      let index = 13;
      let sum = 0;
      for (const num of idCard.substring(0,12)){
        if (isNaN(Number(num))){
          return {idCard:true};
        }
        sum += Number(num) * index-- ;
      }

      const mod = sum % 11;
      const lastNum = `${11 - mod}`.slice(-1);

        if (idCard.charAt(12) !== lastNum){
          return {idCard: true};
        }
    }
    return null;
  };
  
  idCard = new FormControl(null, [
    Validators.required,
    Validators.minLength(13), 
    this.idCardValidator,
    
  ]);

  constructor() {}


  ngOnInit() {

  }

  // calbmi() {
  //   if (this.weightF.invalid || this.heightF.invalid) {
  //     return;
  //   }
  
  //   const weight = this.weightF.value; // Optional chaining and cast to number
  //   const height = this.heightF.value;
  //   console.log('weight',weight);
  //   console.log('height',height);
  

  //   this.bmi = weight! / height! **2;
  // }
  
}