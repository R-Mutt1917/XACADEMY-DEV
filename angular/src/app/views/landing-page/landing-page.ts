import { Component } from '@angular/core';
import { Presentation } from './presentation/presentation';
import { IconCard } from '../../core/icon-card/icon-card';
import { CommonModule } from '@angular/common';
import { Feature } from '../../core/model/feature.model';
import { FeaturesService } from '../../core/services/features.service';

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
  features?: Feature[];

  constructor(private featureService: FeaturesService) { }

  ngOnInit() {
    this.features = this.featureService.features;
  }
}

