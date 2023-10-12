import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public isLogin: boolean = true;


  public toggle = (): void => {
    this.isLogin = !this.isLogin;
  }
}
