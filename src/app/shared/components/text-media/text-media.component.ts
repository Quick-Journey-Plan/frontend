import { Component, Input } from '@angular/core';
import { Content, Image, Link } from '@app/shared/interfaces/index';

@Component({
  selector: 'app-text-media',
  templateUrl: './text-media.component.html',
  styleUrls: ['./text-media.component.scss']
})
export class TextMediaComponent {
  @Input()
  public content: Content = { title: '', description: '' };

  @Input()
  public image: Image = { src: '', alt: '' };

  @Input()
  public internLink: Link = { title: '', href: '' }

  @Input()
  public externLink: Link = { title: '', href: '' }
}
