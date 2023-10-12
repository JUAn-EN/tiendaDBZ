import { Component } from '@angular/core';

@Component({
  selector: 'app-interfas-venta-goku',
  templateUrl: './interfas-venta-goku.component.html',
  styleUrls: ['./interfas-venta-goku.component.css']
})
export class InterfasVentaGokuComponent {
  imagenMostrada: string = ''; 
  mostrarImagen(event: MouseEvent, url: string) {
    this.imagenMostrada = url;
  }
}
