import { Component } from '@angular/core';
import { OutlineButton } from '../outline-button/outline-button';
import { HeaderMenu } from './header-menu/header-menu';
import { MenuItem } from '../model/menu-item.model';

@Component({
  selector: 'app-header',
  imports: [
    OutlineButton,
    HeaderMenu,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  menuItems: MenuItem[] = [
    { text: 'Free Landing Pages', route: '/landing' },
    { text: 'Features', route: '/features' },
    { text: 'Service', route: '/service' },
    { text: 'Pricing', route: '/pricing' },
    { text: 'Contact', route: '/contact' },
  ];
}
