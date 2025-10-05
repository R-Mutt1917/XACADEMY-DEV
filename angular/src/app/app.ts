import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './core/header/header';
import { LandingPage } from "./views/landing-page/landing-page";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    CommonModule,
    Header,
    LandingPage
]
})
export class App {

}

