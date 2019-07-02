import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent implements OnInit {
  public page: number = 1;
  public personagens: any[] = [];
  public termo: string = '';
  public isSearch: boolean = false;
  public loader: boolean = false;

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.getPersonagensPorPagina(this.page);
  }

  carregarMais = (event) => {
    if (!this.isSearch) {
      setTimeout(() => {
        this.getPersonagensPorPagina(this.page);
      }, 500);
    }
  }

  getPersonagensPorPagina(page) {
    this.loader = true;
    
    this._apiService.getPersonagensPorPagina(page)
      .subscribe((data: any) => {
        this.loader = false;
        this.page++;

        this.personagens = [...this.personagens, ...data.results]
      },
        (error) => { this.loader = false })

  }

  receiveMessage($event) {
    this.termo = $event;
    this.isSearch = true;
    this.loader = true;

    if (this.termo !== "") {
      this._apiService.buscar(this.termo)
        .subscribe((data: any) => {
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
