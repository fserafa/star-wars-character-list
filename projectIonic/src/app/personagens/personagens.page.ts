import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.page.html',
  styleUrls: ['./personagens.page.scss'],
})
export class PersonagensPage implements OnInit {
  public page: number = 1;
  public personagens = [];
  public isSearch: any = false;
  public loader: any = false;
  public termo: string = '';

  constructor(private _apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.getPersonagensPorPagina(this.page);
  }

  carregarMais = (event) => {
    if (!this.isSearch) {
      setTimeout(() => {
        this.getPersonagensPorPagina(this.page);
        event.target.complete();

     
      }, 500);
    }
    else {
      event.target.complete();
    }
  }

  getPersonagensPorPagina(page) {
    this.loader = true;

    this._apiService.getPersonagensPorPagina(page)
      .subscribe(
        (data: any) => {
          this.loader = false;
          this.personagens = [...this.personagens, ...data.results];
          this.page++;
        },
        (error) => { this.loader = false })
  }

  irParaFilmes = (filmesUrls) => {
    let navigationExtras: NavigationExtras = {
      replaceUrl: false,
      queryParams: {
        filmesUrls: filmesUrls
      } 
    };
    this.router.navigateByUrl('/filmes', navigationExtras)
  }

  buscar = (event) => {
    this.loader = true;
    this.termo = event.detail.value;

    if (event.detail.value !== "") {
      this._apiService.buscar(event.detail.value)
        .subscribe((data: any) => {
          this.isSearch = true;
          this.loader = false;

          this.personagens = [...data.results]
        })
    } else {
      this.page = 1;
      this.loader = false;
      this.isSearch = false;
      this.personagens = [];

      this.getPersonagensPorPagina(this.page)
    }

  }
}
