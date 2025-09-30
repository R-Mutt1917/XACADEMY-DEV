import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clicker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clicker.html',
  styleUrl: './clicker.scss'
})
export class Clicker {
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
