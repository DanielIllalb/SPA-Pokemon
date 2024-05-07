import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './pokemon/componentes/card/card.component';
import { SidebarComponent } from './shared/componentes/sidebar/sidebar.component';

const routes: Routes = [
  {path:'poke-card/:pokemonName', component:CardComponent},
  {path:'pokemon-list', component:SidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
