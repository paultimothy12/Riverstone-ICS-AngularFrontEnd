import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../security/auth-context";
import {HeaderComponent} from "../header/header.component";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  showErrorMessage = false;
  constructor(private authService: AuthService,private router: Router) {}
  async handleSubmit() {
    if (await this.authService.login(this.username, this.password)) {
      this.router.navigateByUrl('/welcome');
      console.log(this.authService.isAuthenticated);
    } else {
      this.showErrorMessage = true;
      console.log(this.authService.isAuthenticated);
    }
  }
}
