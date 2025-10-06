import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './core/header/header';
import { LandingPage } from "./views/landing-page/landing-page";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    CommonModule,
    Header,
    RouterOutlet,
]
})
export class App {

}

