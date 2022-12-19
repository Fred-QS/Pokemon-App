import { Injectable } from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {POKEMONS} from "../providers/mock-pokemons";


// Service disponible à l'ensemble de l'application grâce à :

/*@Injectable({
  providedIn: 'root'
})*/

export class PokemonService {

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId)
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ]
  }
}
