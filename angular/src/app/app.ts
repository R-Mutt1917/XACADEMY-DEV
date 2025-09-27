import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [CommonModule]
})
export class App {
  tablaPuntuaciones = [
    {nombre: 'Juan', puntuacion: 855},
    {nombre: 'Pedro', puntuacion: 803},
    {nombre: 'Luis', puntuacion: 720},
  ];

  contador = 0;
  bonus = false;

  sumar(cantidad: number): void {
    this.contador = this.contador + cantidad;

    // cuando alcanzamos 10, habilita un botón de bonus
    if (this.contador === 10) {
      this.bonus = true;

      // timeout de 5 segundos, pasado este tiempo el botón volverá a su estado original
      window.setTimeout(() => {
        this.bonus = false;
      }, 5000);
    }
  }
}

