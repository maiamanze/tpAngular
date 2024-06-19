import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../listado-peliculas/Pelicula';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataPelisService {
  constructor(private http: HttpClient) { }

  // public getAll(): Observable<Pelicula[]> {
  //   return ...;
      
  //   )
  // }
}

