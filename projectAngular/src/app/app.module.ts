import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { PersonagensComponent } from './personagens/personagens.component';
import { FilmesComponent } from './filmes/filmes.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { BuscaComponent } from './busca/busca.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonagensComponent,
    FilmesComponent,
    BuscaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
