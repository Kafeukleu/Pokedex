import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';
import {FavoritePokemonService} from '../../services/favorite-pokemon.service';

@Component({
  selector: 'app-favorite-counter',
  templateUrl: './favorite-counter.component.html',
  styleUrls: ['./favorite-counter.component.css']
})
export class FavoriteCounterComponent implements OnInit {

  public counter$ = of(1);

  constructor(public favoritePokemonService: FavoritePokemonService) { }

  ngOnInit(): void {
  }

}
