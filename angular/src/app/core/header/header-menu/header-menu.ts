import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  imports: [
    CommonModule,
  ],
  templateUrl: './header-menu.html',
  styleUrl: './header-menu.scss'
})
export class HeaderMenu {
  @Input() menuItems?: {
    text: string,
    route: string,
  }[];
}
