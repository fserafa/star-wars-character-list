import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  public filmes: any[] = [];
  public filmesUrls: any[] = [];

  constructor(private _apiService: ApiService,  private router: Router) {
    this.filmesUrls = this.router.getCurrentNavigation().extras.state.filmes;
  }

  ngOnInit() {
      this._apiService.getFilmes(this.filmesUrls)
      .subscribe((data: any) => this.filmes = data);

    };

 
}


