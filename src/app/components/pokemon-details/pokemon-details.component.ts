import { Component, OnInit } from '@angular/core';
import {PokemonSelectionService} from '../../services/pokemon-selection.service';
import {Observable} from 'rxjs';
import {FavoritePokemonService} from '../../services/favorite-pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  public selectedPokemonDetails$: Observable<any>;
  public isSelectedPokemonFavorite$: Observable<boolean>;

  constructor(private pokemonSelectionService: PokemonSelectionService) { }

  ngOnInit(): void {
    this.selectedPokemonDetails$ = this.pokemonSelectionService.getSelectedPokemonDetails();
    this.isSelectedPokemonFavorite$ = this.pokemonSelectionService.isSelectedPokemonFavorite();
  }
}
