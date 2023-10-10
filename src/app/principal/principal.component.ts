import { Component } from '@angular/core';
import { AudioService } from '../serivice/audio.service'; 

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  nuveVisible: { [key: string]: boolean } = {};

  // Variables para controlar el estado de reproducción de cada audio
  reproduciendoAudio1: boolean = false;
  reproduciendoAudio2: boolean = false;

  constructor(private audioService: AudioService) {}

  mostrarNuve(audioId: string) {
    this.nuveVisible[audioId] = true;
  }

  ocultarNuve(audioId: string) {
    this.nuveVisible[audioId] = false;
  }

  // Método para reproducir el audio 1
  reproducirAudio1() {
    if (!this.reproduciendoAudio1) {
      this.audioService.detenerAudio();
      this.audioService.reproducirAudio('/assets/audios/here-goes_7vheSQi.mp3');
      this.reproduciendoAudio1 = true;
      this.reproduciendoAudio2 = false;
    }
  }

  // Método para reproducir el audio 2
  reproducirAudio2() {
    if (!this.reproduciendoAudio2) {
      this.audioService.detenerAudio();
      this.audioService.reproducirAudio('/assets/audios/hey-its-me-goku.mp3');
      this.reproduciendoAudio1 = false;
      this.reproduciendoAudio2 = true;
    }
  }
}
