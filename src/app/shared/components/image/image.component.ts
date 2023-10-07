import { Component, Input } from '@angular/core';
import { Image } from '@app/shared/interfaces';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input()
  public image: Image = { src: '', alt: '' };

  @Input()
  public className: string = '';
}
