import {Component, OnInit} from '@angular/core';
import {Pokemon} from "./models/pokemon";
import {POKEMONS} from "./providers/mock-pokemons";

@Component({
  selector: 'app-root',
  templateUrl: './templates/app.component.html'
})
export class AppComponent implements OnInit {

  // @ts-ignore
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  /*constructor() {
    this.pokemonList = []; // Surtout jamais faire ça. Initialiser les propriétés dans ngOnInit()
  }*/

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  /*selectPokemon(pokemonId: string) {
    const pokemon: Pokemon|undefined = this.pokemons.find(pokemon => pokemon.id == +pokemonId);
    this.pokemonSelected = pokemon;
    if (pokemon) {
      console.log(`Vous avez demandé le pokemon ${pokemon.name}`);
    } else {
      console.log(`Vous avez demandé un pokemon qui n'existe pas`);
    }
  }*/

  selectPokemon(pokemon: Pokemon) {
    this.pokemonSelected = this.pokemonList.find(poke => poke.id == +pokemon);
    if (pokemon) {
      console.log(`Vous avez demandé le pokemon ${pokemon.name}`);
    } else {
      console.log(`Vous avez demandé un pokemon qui n'existe pas`);
    }
  }
}
