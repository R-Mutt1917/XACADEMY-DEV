import { AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clicker } from './clicker/clicker';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [CommonModule, Clicker]
})
export class App implements OnInit, AfterViewInit, OnDestroy {

  ocultarContador = false;

  constructor() {
  console.log('soy el constructor de app');
}

ngOnInit() {
  console.log('soy el oninit de app');
  /*this.timeoutRef = setTimeout(() => {
    console.log('soy un timeout');
  }, 20000)*/
}

ngAfterViewInit(): void {
  console.log('soy el afterviewinit de app');
}

ngOnDestroy(): void {
  /*clearTimeout(this.timeoutRef);*/
  console.log('soy el ondestroy de app');
}

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

