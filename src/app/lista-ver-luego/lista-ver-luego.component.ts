import { Component } from '@angular/core';
import { WatchLaterListService } from '../services/watch-later-list.service';
import { Pelicula } from '../listado-peliculas/Pelicula';

@Component({
  selector: 'app-lista-ver-luego',
  templateUrl: './lista-ver-luego.component.html',
  styleUrl: './lista-ver-luego.component.scss'
})

export class ListaVerLuegoComponent {

  moviesList: Pelicula[] | undefined;
  constructor(private list: WatchLaterListService) {
    list.moviesList.subscribe((observable: Pelicula[]) => this.moviesList = observable);
  }

  removeMovie(p: Pelicula): void {
    this.list.removeFromWatchLater(p.title);
  }
}
