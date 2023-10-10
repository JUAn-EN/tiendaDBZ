import { Component } from '@angular/core';
import { AudioService } from '../serivice/audio.service'; 

@Component({
  selector: 'app-interfas-venta',
  templateUrl: './interfas-venta.component.html',
  styleUrls: ['./interfas-venta.component.css']
})
export class InterfasVentaComponent {
  constructor(private audioService: AudioService) {}


  
  ngOnDestroy() {
    this.audioService.detenerAudio();
  }
}
