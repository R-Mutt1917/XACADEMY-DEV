import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './core/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    CommonModule,
    Header
  ]
})
export class App {

}

