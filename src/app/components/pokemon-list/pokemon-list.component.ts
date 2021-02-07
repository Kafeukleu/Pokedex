import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PokemonListDataSource, PokemonListItem } from './pokemon-list-datasource';
import {FavoritePokemonService} from '../../services/favorite-pokemon.service';
import {PokeApiService} from '../../services/poke-api.service';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<PokemonListItem>;
  dataSource: PokemonListDataSource;
  paginationSize: number;
  numberOfPokemons$: Observable<number>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'actions'];

  constructor(private favoritePokemonService: FavoritePokemonService, private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.paginationSize = +localStorage.getItem('pokemonPageSizeSetting');
    this.numberOfPokemons$ = this.pokeApiService.getPokemonCount();
    this.dataSource = new PokemonListDataSource(this.pokeApiService);
    this.dataSource.loadPokemons(0, this.paginationSize);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.paginator.page
      .pipe(
        tap(() => this.loadPokemonsPage())
      )
      .subscribe();
  }

  public isFavorite(row: any): boolean {
    return false;
  }

  public addToFavorites(row: any): void {
    this.favoritePokemonService.addFavoritePokemonName(row.id);
  }

  public removeFromFavorites(row: any): void {
    // TODO
  }

  private loadPokemonsPage(): void {
    this.dataSource.loadPokemons(
      this.paginator.pageIndex,
      this.paginator.pageSize);
  }
}
