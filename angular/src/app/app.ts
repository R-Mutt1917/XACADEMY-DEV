import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clicker } from './clicker/clicker';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [CommonModule, Clicker]
})
export class App {
  tablaPuntuaciones = [
    {nombre: 'Juan', puntuacion: 855},
    {nombre: 'Pedro', puntuacion: 803},
    {nombre: 'Luis', puntuacion: 720},
  ];

  handleCounterChange(newCounter: number) {
    this.tablaPuntuaciones.push({
      nombre: '${counter} Jugar', 
      puntuacion: newCounter * 100
    })
  }
}

