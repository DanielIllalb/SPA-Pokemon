import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';
import { InfoPokemon } from '../interfaces/info-pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) { }

  private url = "https://pokeapi.co/api/v2";
  
  obtenerTodosLosPokemon():Observable<Pokemon> {
      const params = new HttpParams().set("limit","151");
      return this.http.get<Pokemon>(this.url + '/pokemon', {params: params});
  }
  
  obtenerInformacionPokemon(pokemon:string):Observable<InfoPokemon> {
    return this.http.get<InfoPokemon>(this.url + '/pokemon/' + pokemon);
  }
  
}
