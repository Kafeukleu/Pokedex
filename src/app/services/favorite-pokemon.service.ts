import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritePokemonService {
  private _favoritePokemonIds = new BehaviorSubject<string[]>([]);

  constructor() { }

  public get favoritePokemonNames(): Observable<string[]> {
    return this._favoritePokemonIds.asObservable();
  }

  public addFavoritePokemonName(name: string): void {
    this._favoritePokemonIds.next([...this._favoritePokemonIds.value, name]);
  }
}
