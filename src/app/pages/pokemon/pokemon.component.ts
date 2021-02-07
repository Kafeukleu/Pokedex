import { Component, OnInit } from '@angular/core';
import {FavoritePokemonService} from '../../services/favorite-pokemon.service';
import {PokeApiService} from '../../services/poke-api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public pokemonCount$: Observable<number>;

  constructor(public favoritePokemonService: FavoritePokemonService, public pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokemonCount$ = this.pokeApiService.getPokemonCount();
  }

}
