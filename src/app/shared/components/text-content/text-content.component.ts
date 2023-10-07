import { Component, Input } from '@angular/core';
import { Content, Link } from '@app/shared/interfaces';

@Component({
  selector: 'app-text-content',
  templateUrl: './text-content.component.html',
  styleUrls: ['./text-content.component.scss']
})
export class TextContentComponent {
  @Input()
  public content: Content = { title: '', description: '' };

  @Input()
  public link: Link = { title: '', href: '' };
}
