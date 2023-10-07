import { Component } from '@angular/core';
import { Content, Image, Link } from '@app/shared/interfaces';

@Component({
  selector: 'app-hero-area',
  templateUrl: './hero-area.component.html',
  styleUrls: ['./hero-area.component.scss']
})
export class HeroAreaComponent {
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
}
