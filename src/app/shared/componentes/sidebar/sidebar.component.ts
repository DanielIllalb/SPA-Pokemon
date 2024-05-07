import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../pokemon/servicio/pokemon.service';
import { Pokemon } from '../../../pokemon/interfaces/pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  pokemon!: Pokemon;

  constructor(private pokemonService: PokemonService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerPokemon();
  }

  obtenerPokemon(): void {
    this.pokemonService.obtenerTodosLosPokemon()
      .subscribe(
        (data: Pokemon) => {
          this.pokemon = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  irAPokemon(nombrePokemon: string):void {
    this.router.navigate(['/poke-card',nombrePokemon]);
  }
}
