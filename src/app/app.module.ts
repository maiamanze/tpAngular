import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';

import { HttpClient } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { ListaVerLuegoComponent } from './lista-ver-luego/lista-ver-luego.component';
import { SuscribirsePagComponent } from './suscribirse-pag/suscribirse-pag.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPeliculasComponent,
    AboutUsComponent,
    ListaVerLuegoComponent,
    SuscribirsePagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClient,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
