import { Component, Input } from '@angular/core';
import { Content } from '@app/shared/interfaces/index';

@Component({
  selector: 'app-text-media',
  templateUrl: './text-media.component.html',
  styleUrls: ['./text-media.component.scss']
})
export class TextMediaComponent {
  @Input()
  public content: Content = { title: '', description: '' };

}
