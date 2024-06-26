import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './pokemon/componentes/card/card.component';
import { SharedModule } from './shared/shared.module';
import { PokemonPipe } from './pokemon/pipes/pokemon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PokemonPipe
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
