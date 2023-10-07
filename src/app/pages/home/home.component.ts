import { Component } from '@angular/core';
import { Content, Image } from '@app/shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public searchFieldContent: Content = {
    title: 'Explore Your City with AI Guidance!',
    description: "Unlock the secrets of your city with our AI-driven 3-day plan. It's the perfect way to embark on an urban exploration"
  }

  public searchFieldImage: Image = {
    src: 'assets/images/location.png',
    alt: 'Quick Journey Planer'
  }
}
