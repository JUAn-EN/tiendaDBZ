import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audios: HTMLAudioElement[] = [];

  constructor() {}

  reproducirAudio(audioSrc: string) {
    const audio = new Audio();
    audio.src = audioSrc;
    audio.play();
    this.audios.push(audio);
  }

  detenerAudio() {
    for (const audio of this.audios) {
      audio.pause();
    }
    this.audios = [];
  }
}
