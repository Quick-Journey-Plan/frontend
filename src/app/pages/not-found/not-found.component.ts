import { Component } from '@angular/core';
import { Content, Image, Link } from '@app/shared/interfaces';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  public content: Content = { title: '404', description: 'Page Not Found' };
  public link: Link = { title: 'Back', href: '/' };
  public image: Image = { src: 'assets/images/404.png', alt: 'Quick Journey Planer Not Found' };
  public externLink: Link = { title: 'Support us', href: 'https://github.com/jeyhunr' };
}
