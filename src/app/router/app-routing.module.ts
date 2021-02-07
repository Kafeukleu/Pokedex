import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonComponent} from '../pages/pokemon/pokemon.component';
import {SettingsComponent} from '../pages/settings/settings.component';

const routes: Routes = [
  { path: '', component: PokemonComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
