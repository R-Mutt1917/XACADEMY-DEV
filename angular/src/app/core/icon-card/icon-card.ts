import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-card',
  imports: [],
  templateUrl: './icon-card.html',
  styleUrl: './icon-card.scss'
})
export class IconCard {
  @Input() icon = '';
  @Input() title = '';
  @Input() description = '';
}
