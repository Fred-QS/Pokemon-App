import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {Router} from "@angular/router";
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  // Services disponibles uniquement au niveau du composant grâce à : providers: [PokemonService, ...] (Pas du tout recommandé)
  // providers: [PokemonService]
})
export class ListPokemonComponent implements OnInit {

  pokemonList: Pokemon[];

  constructor(
      private router: Router,
      private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.pokemonList = this.pokemonService.getPokemonList()
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['pokemon/', pokemon.id])
  }
}
