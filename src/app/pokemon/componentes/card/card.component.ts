import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../servicio/pokemon.service';
import { InfoPokemon } from '../../interfaces/info-pokemon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})


export class CardComponent implements OnInit {

  pokemonName!: string;
  pokemon!: InfoPokemon;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonInfo();
  }

  getPokemonInfo(): void {
    this.route.params.subscribe(params => {
      this.pokemonName = params['pokemonName'];
      this.pokemonService.obtenerInformacionPokemon(this.pokemonName).subscribe(data => {
        this.pokemon = data;
      });
    });
  }
}
