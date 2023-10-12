import { Component } from '@angular/core';

@Component({
  selector: 'app-interfas-venta',
  templateUrl: './interfas-venta.component.html',
  styleUrls: ['./interfas-venta.component.css']
})
export class InterfasVentaComponent {
  imagenMostrada: string = ''; 
  mostrarImagen(event: MouseEvent, url: string) {
    this.imagenMostrada = url;
  }
}
