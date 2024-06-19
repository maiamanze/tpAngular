import { Injectable } from '@angular/core';
import { Pelicula } from '../listado-peliculas/Pelicula';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WatchLaterListService {
  private _list: Pelicula[] = [];
  moviesList: BehaviorSubject<Pelicula[]> = new BehaviorSubject(this._list);

  constructor() { }

  addToWatchLater(p: Pelicula) {
    let item: Pelicula | undefined = this._list.find((v1) => v1.title == p.title);
    
    if (!item) {
      this._list.push({... p});
    } else {
      alert("La película ya está agregada a la lista!");
    }

    this.moviesList.next(this._list);
  }

  removeFromWatchLater(title: string): void {
    this._list = this._list.filter(p => p.title !== title);
    this.moviesList.next(this._list);
  }


}
