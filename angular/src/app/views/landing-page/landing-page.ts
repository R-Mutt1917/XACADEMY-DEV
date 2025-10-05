import { Component } from '@angular/core';
import { Presentation } from './presentation/presentation';
import { IconCard } from '../../core/icon-card/icon-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [
    Presentation,
    IconCard,
    CommonModule,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPage {
  features = [
    {
      icon: 'add_box',
      title: 'Easy to Use',
      description: 'Editing and customizing Essential Landing is easy and fast.'
    },  
    {
      icon: 'star_half',
      title: '100% Responsive',
      description: 'Editing and customizing Essential Landing is easy and fast.'
    },  
    {
      icon: 'system_update_alt',
      title: '50+ New Pages',
      description: 'Editing and customizing Essential Landing is easy and fast.'
    },
  ];
}
