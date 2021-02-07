import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavoritePokemonService {
  // TODO: enhance by using a Set directly
  private _favoritePokemonNames = new BehaviorSubject<string[]>([]);

  constructor() { }

  public get favoritePokemonNames(): Observable<string[]> {
    return this._favoritePokemonNames.asObservable();
  }

  public addFavoritePokemonName(name: string): void {
    this._favoritePokemonNames.next([...this._favoritePokemonNames.value, name]);
  }

  public removeFavoritePokemonName(name: string): void {
    this._favoritePokemonNames.next(this._favoritePokemonNames.value.filter((eltName: string) => eltName !== name));
  }

  public isFavoritePokemon(name: string): Observable<boolean> {
    return this.favoritePokemonNames.pipe(
      map((favoritePokemonNames: string[]) => favoritePokemonNames.includes(name)
      )
    );
  }
}
