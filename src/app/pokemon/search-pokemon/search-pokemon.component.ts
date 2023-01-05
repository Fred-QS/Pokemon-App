import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {Router} from "@angular/router";
import {Observable, Subject, tap, catchError, debounceTime, distinctUntilChanged, switchMap, map} from "rxjs";
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html'
})
export class SearchPokemonComponent implements OnInit{

  // Flux de données dans le temps => {..."a".."ab"..."abz".."ab".."abc"...}
  searchTerms = new Subject<string>()
  // Résultat du flux => {...pokemonList(a)..pokemonList(ab)...pokemonList(abz)..pokemonList(ab)..pokemonList(abc)...}
  pokemons$: Observable<Pokemon[]>

  constructor(
      private router: Router,
      private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
        // {..."a"."ab"..."abz"."ab"...."abc"......}
        debounceTime(300),
        // {......"ab"......"ab"...."abc"......}
        distinctUntilChanged(),
        // {......"ab"............"abc"......}
        // map((term) => this.pokemonService.searchPokemonList(term))
        // Si j'utilise map je vais avoir : {......Observable<"ab">............Observable<"abc">......}
        // concatMap / mergeMap / switchMap # On utilise switchMap qui va annuler la recherche précédente pour se focaliser sur la dernière lancée par le user
        switchMap((term) => this.pokemonService.searchPokemonList(term))
        // {.........pokemonList(ab).............pokemonList(abc).............}
    )
  }

  search(term: string) {
    this.searchTerms.next(term)
  }

  goToDetail(pokemon: Pokemon) {
    const link = ['/pokemon', pokemon.id]
    this.router.navigate(link)
  }
}
