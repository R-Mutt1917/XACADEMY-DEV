import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '../../model/menu-item.model';
@Component({
  selector: 'app-header-menu',
  standalone: true,
    imports: [
      CommonModule,
      RouterLink,
      RouterLinkActive,
    ],
  templateUrl: './header-menu.html',
  styleUrls: ['./header-menu.scss']
})
export class HeaderMenu {
  @Input() menuItems?: MenuItem[];
}
