import { Component, OnInit } from '@angular/core';
import { DataPelisService } from '../services/data-pelis.service';
import { Pelicula } from './Pelicula';
import { WatchLaterListService } from '../services/watch-later-list.service';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.scss'
})

export class ListadoPeliculasComponent implements OnInit {
    peliculas: Pelicula[] = [];

    constructor(private list : WatchLaterListService, private moviesData: DataPelisService) { }
    
    ngOnInit(): void {
        this.moviesData.getAll().subscribe(data => this.peliculas = data);
    }

    addToWatchLater(p: Pelicula): void {
        this.list.addToWatchLater(p);
    }

}
