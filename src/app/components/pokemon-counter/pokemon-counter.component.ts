import { Component, OnInit } from '@angular/core';
import {PokeApiService} from '../../services/poke-api.service';
import {Observable} from 'rxjs';
import {FavoritePokemonService} from '../../services/favorite-pokemon.service';

@Component({
  selector: 'app-pokemon-counter',
  templateUrl: './pokemon-counter.component.html',
  styleUrls: ['./pokemon-counter.component.css']
})
export class PokemonCounterComponent implements OnInit {

  public pokemonCount$: Observable<number>;

  constructor(public pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokemonCount$ = this.pokeApiService.getPokemonCount();
  }

}
