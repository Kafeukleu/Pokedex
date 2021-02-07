import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {switchMap} from 'rxjs/operators';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {PokeApiService} from '../../services/poke-api.service';

export interface PokemonListItem {
  name: string;
}

/**
 * Data source for the PokemonList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PokemonListDataSource extends DataSource<PokemonListItem> {

  private pokemonsSubject = new BehaviorSubject<PokemonListItem[]>([]);
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private pokeApiService: PokeApiService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<PokemonListItem[]> {
    return this.pokemonsSubject.asObservable();
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    // const dataMutations = [
    //   this.paginator.page,
    // ];
    //
    // return merge(...dataMutations).pipe(switchMap(() =>
    //   this.getPagedData(this.paginator.pageIndex * this.paginator.pageSize, this.paginator.pageSize)));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {
    this.pokemonsSubject.complete();
  }

  // public getPagedData(startIndex = 0, pageSize = 20): Observable<PokemonListItem[]> {
  //   return this.pokeApiService.listPokemons(pageSize, startIndex);
  // }

  public loadPokemons(pageIndex = 0, pageSize = 20): void {
    this.pokeApiService.listPokemons(pageSize, pageIndex * pageSize).subscribe(
      (pokemonListItems: any) => this.pokemonsSubject.next(pokemonListItems.results)
    );
  }
}
