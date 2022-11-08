import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{ pokemonList[0] }}!</h1>`
})
export class AppComponent {

  pokemonList = ['Bulbizarre', 'Salamèche', 'Carapuce'];

  /*constructor() {
    this.pokemonList = []; // Surtout jamais faire ça. Initialiser les propriétés dans ngOnInit()
  }*/

  ngOnInit(): void {
    console.table(this.pokemonList)
  }
}
