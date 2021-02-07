import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {PokemonModel} from '../models/pokemon.model';
import {PokeApiService} from './poke-api.service';
import {switchMap} from 'rxjs/operators';
import {FavoritePokemonService} from './favorite-pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonSelectionService {
  private _selectedPokemon = new BehaviorSubject<PokemonModel>(undefined);

  constructor(private pokeApiService: PokeApiService, private favoritePokemonService: FavoritePokemonService) {
  }

  public get selectedPokemon(): Observable<PokemonModel> {
    return this._selectedPokemon.asObservable();
  }

  public setSelectedPokemon(pokemon: PokemonModel): void {
    this._selectedPokemon.next(pokemon);
  }

  public getSelectedPokemonDetails(): Observable<any> {
    return this.selectedPokemon.pipe(
      switchMap((pokemon: PokemonModel) => this.pokeApiService.getPokemonByName(pokemon?.name))
    );
  }

  public isSelectedPokemonFavorite(): Observable<boolean> {
    return this.selectedPokemon.pipe(
      switchMap((pokemon: PokemonModel) => this.favoritePokemonService.isFavoritePokemon(pokemon?.name))
    );
  }
}
