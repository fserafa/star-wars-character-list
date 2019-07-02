import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getPersonagensPorPagina(page: number = 1): Observable<any[]> {
    return this.http.get<any[]>(`https://swapi.co/api/people/?page=${page}`)
  };



  buscar(termo: string): Observable<any[]> {
    return this.http.get<any[]>(`https://swapi.co/api/people/?search=${termo}`)
  };

  getFilmes(urls: string[]): Observable<any[]> {
    let response;
    let responses = [];

    urls.map((url) => {
      response = this.http.get<any[]>(url)

      responses.push(response)
    })

    return forkJoin(responses);
  };
}
