import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private readonly POKE_API_URL = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {
  }

  public listPokemons(limit = 20, offset = 0): Observable<any> {
    let params = new HttpParams();
    params = params.append('limit', '' + limit);
    params = params.append('offset', '' + offset);

    return this.http.get(
      this.POKE_API_URL + 'pokemon',
      {
        params
      },
    );
  }

  public getPokemonByName(name: string): Observable<any> {
    if (!!name) {
      return this.http.get(
        this.POKE_API_URL + 'pokemon/' + name,
      );
    }
    return of(undefined);
  }

  // Found endpoint here: https://github.com/PokeAPI/pokeapi/issues/143
  public getPokemonCount(): Observable<number> {
    let params = new HttpParams();
    params = params.append('limit', '0');

    return this.http.get(
      this.POKE_API_URL + 'pokemon-species',
      {
        params
      },
    ).pipe(
      take(1),
      map((species: any) => species?.count));
  }
}
