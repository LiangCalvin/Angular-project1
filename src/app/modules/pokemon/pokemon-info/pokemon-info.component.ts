import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';

export interface PokemonChoose {
  id: number;
  pokename: string;
  choose: 'Y' | 'N' | string;
}
@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrl: './pokemon-info.component.css',

})
export class PokemonInfoComponent {
  pokemonChooseList: PokemonChoose[] = [
    {
      id: 0,
      pokename: 'pikachu',
      choose: 'Y',
    },
    { id: 1, pokename: 'ditto', choose: 'N' },
    { id: 2, pokename: 'wobbuffet', choose: 'Y' },
    { id: 3, pokename: 'girafarig', choose: 'N' },
    { id: 4, pokename: 'forretress', choose: 'Y' },
  ];
  title = 'angular-pure-pipe';
}
