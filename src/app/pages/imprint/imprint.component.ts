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
    Name: <b>Quick-Journey</b> <br />
    Email: <a href='mailto:mail@rahimli.net'>mail@rahimli.net</a> <br />
    Website: <a href="https://www.quick-journey.com">www.quick-journey.com</a> <br /> <br />
    <b> Note: </b> This website was developed by <a href="https://rahimli.net">Jeyhun Rahimli</a> for the purpose of learning. <br />` };

  @Input()
  public image: Image = { src: 'assets/images/world_airplain.png', alt: 'Quick Journey Plan Imprint' };
}
