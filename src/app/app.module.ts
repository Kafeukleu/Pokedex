import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PokemonComponent} from './pages/pokemon/pokemon.component';
import {AppRoutingModule} from './router/app-routing.module';
import {FavoriteCounterComponent} from './components/favorite-counter/favorite-counter.component';
import {SettingsModule} from './pages/settings/settings.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { PokemonCounterComponent } from './components/pokemon-counter/pokemon-counter.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    FavoriteCounterComponent,
    PokemonCounterComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SettingsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
