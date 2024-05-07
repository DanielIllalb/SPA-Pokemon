import { Pipe, PipeTransform } from '@angular/core';
import { tipoPokemonColores } from './pokemon-colores';

@Pipe({
  name: 'pokemon'
})

export class PokemonPipe implements PipeTransform {
  transform(tipo: string): any {
    const color = tipoPokemonColores[tipo.toLowerCase()] || 'grey';
    return {color:color};
  }
}
