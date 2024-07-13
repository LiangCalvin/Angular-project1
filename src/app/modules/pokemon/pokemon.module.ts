import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipePokemonModule } from '../../../shared/pipe/pipe-pokemon/pipe-pokemon.module';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    PipePokemonModule,
    
  ]
})
export class PokemonModule { }
