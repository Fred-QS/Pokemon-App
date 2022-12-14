import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../models/pokemon";
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  // Services disponibles uniquement au niveau du composant grâce à : providers: [PokemonService, ...] (Pas du tout recommandé)
  // providers: [PokemonService]
})
export class DetailPokemonComponent implements OnInit {

  pokemon: Pokemon|undefined;

  constructor(
      private currentRoute: ActivatedRoute,
      private router: Router,
      private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const pokemonId: string|null = this.currentRoute.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
          .subscribe(pokemon => this.pokemon = pokemon)
    }
  }
  
  deletePokemon(pokemon: Pokemon) {
    this.pokemonService.deletePokemonById(pokemon.id)
        .subscribe(() => this.goToPokemonList())
  }

  goToPokemonList() {
    this.router.navigate(['pokemons']);
  }

  gotToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['edit/pokemon/', pokemon.id]);
  }
}
