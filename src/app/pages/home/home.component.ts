import { Component } from '@angular/core';
import { Content, Image, Link } from '@app/shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public content: Content = {
    title: 'AI-Powered Journey Planning:',
    description: 'Charting Your Path to Memorable and Thrilling Adventures!'
  }

  public supportUs: Link = {
    title: 'Support Us',
    href: 'https://github.com/jeyhunr'
  }

  public joinLink: Link = {
    title: 'Join',
    href: '/register'
  }

  public colImage: Image = {
    alt: 'Quick Journey Planer',
    src: 'assets/images/airplane_quick_journey.png'
  }

  public searchFieldContent: Content = {
    title: 'Explore Your City with AI Guidance!',
    description: "Unlock the secrets of your city with our AI-driven 3-day plan. It's the perfect way to embark on an urban exploration"
  }

  public searchFieldImage: Image = {
    src: 'assets/images/airplain_map.png',
    alt: 'Quick Journey Planer'
  }
}
