import { Component, Input } from '@angular/core';
import { Content, Image } from '@app/shared/interfaces';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {
  @Input()
  public content: Content = {
    title: "Imprint", description: `
    This website was set up by Jeyhun Rahimli for the learning project. <br /> 
    Name: <b>Jeyhun Rahimli</b> <br />
    Email: <a href='mailto:mail@rahimli.net'>mail@rahimli.net</a> <br />
    Website: <a href="https://rahimli.net">rahimli.net</a>` };

  @Input()
  public image: Image = { src: 'assets/images/airplain_2.png', alt: '' };
}
