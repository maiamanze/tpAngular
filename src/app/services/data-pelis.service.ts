import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../listado-peliculas/Pelicula';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataPelisService {
  private URL = 'https://imdb-top-100-movies.p.rapidapi.com/';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.URL, {headers:{
      'X-RapidAPI-Key': 'e8ef067749msha8d765b032c5e25p1cd27ejsn5f3bafabf32f',
      'X-Rapidapi-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }});
  }
}

