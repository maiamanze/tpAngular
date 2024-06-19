import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SuscribirsePagComponent } from './suscribirse-pag/suscribirse-pag.component';
import { ListaVerLuegoComponent } from './lista-ver-luego/lista-ver-luego.component';

const routes: Routes = [
  { path: '', redirectTo: 'peliculas', pathMatch: 'full'},
  { path: 'peliculas', component: ListadoPeliculasComponent},
  { path: 'peliculas', component: ListaVerLuegoComponent},
  { path: 'about', component: AboutUsComponent},
  { path: 'suscribe', component: SuscribirsePagComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
