import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
 // Importa tu servicio de inicio de sesión

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginService.isLoggedIn()) {
      return true; // Usuario autenticado, permitir el acceso
    } else {
      this.router.navigate(['/login']); // Redirigir al usuario al login si no está autenticado
      return false; // No permitir el acceso
    }
  }
}
