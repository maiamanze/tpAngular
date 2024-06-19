import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { ListaVerLuegoComponent } from './lista-ver-luego/lista-ver-luego.component';
import { SuscribirsePagComponent } from './suscribirse-pag/suscribirse-pag.component';
import { HomePeliculasComponent } from './home-peliculas/home-peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    AboutUsComponent,
    ListaVerLuegoComponent,
    SuscribirsePagComponent,
    HomePeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
