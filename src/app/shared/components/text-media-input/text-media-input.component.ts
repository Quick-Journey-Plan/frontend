import { Component, Input } from '@angular/core';
import { Content, Image } from '@app/shared/interfaces';

@Component({
  selector: 'app-text-media-input',
  templateUrl: './text-media-input.component.html',
  styleUrls: ['./text-media-input.component.scss']
})
export class TextMediaInputComponent {
  @Input()
  public content: Content = { title: '', description: '' };

  @Input()
  public image: Image = { src: '', alt: '' };
}
