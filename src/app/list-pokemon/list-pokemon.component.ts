import { Component } from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {POKEMONS} from "../providers/mock-pokemons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {

  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  constructor(private router: Router) {}

  goToPokemon(pokemon: Pokemon) {
    this.pokemonSelected = this.pokemonList.find(poke => poke.id == +pokemon);
    if (pokemon) {
      this.router.navigate(['pokemon/', pokemon.id])
    }
  }
}
