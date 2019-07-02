import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'personagens', pathMatch: 'full' },
  { path: 'personagens', loadChildren: './personagens/personagens.module#PersonagensPageModule' },
  { path: 'filmes', loadChildren: './filmes/filmes.module#FilmesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
