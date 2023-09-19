import { LoginService } from 'src/app/services/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor( private router: Router, private loginService:LoginService) { }

  regresarAlLogin() {
    this.router.navigate(['/login']);
    this.loginService.logout();
  }
}
