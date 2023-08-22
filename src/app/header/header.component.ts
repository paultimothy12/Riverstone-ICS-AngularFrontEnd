import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthService} from "../security/auth-context";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(public authService: AuthService, private router: Router) {
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
  ngOnInit(): void {
  }
}
