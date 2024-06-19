import { Component } from '@angular/core';

@Component({
  selector: 'app-suscribirse-pag',
  templateUrl: './suscribirse-pag.component.html',
  styleUrl: './suscribirse-pag.component.scss'
})
export class SuscribirsePagComponent {

  suscripcion() {
    alert("Estás suscripto!");
  }

}
