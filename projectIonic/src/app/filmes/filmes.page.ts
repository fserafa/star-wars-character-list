import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})

export class FilmesPage implements OnInit {
  public filmesUrls = []
  public filmes = [];
  loader: any = false;

  constructor(private _apiService: ApiService, private router: Router) {
    this.filmesUrls = this.router.getCurrentNavigation().extras.queryParams.filmesUrls;
  }

  ngOnInit() {
    this.loader = true;
    this._apiService.getFilmes(this.filmesUrls)
      .subscribe((data: any) => {
        this.loader = false;
        this.filmes = data;
      });
  }

}
