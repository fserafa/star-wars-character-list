import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonagensComponent } from './personagens/personagens.component';
import { FilmesComponent } from './filmes/filmes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personagens',
    pathMatch: 'full' 
  },
  {
    path: 'personagens',
    component: PersonagensComponent,
  },
  {
    path: 'filmes',
    component: FilmesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }