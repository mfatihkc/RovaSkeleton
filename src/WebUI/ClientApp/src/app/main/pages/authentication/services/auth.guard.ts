import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticateService } from './authenticate.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthenticateService, private router: Router) {
  }

  
  canActivate(
    _next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.auth.isAuthenticated()
        .pipe(tap(isAuthenticated => this.handleAuthorization(isAuthenticated, state)));
  }

 
  private handleAuthorization(isAuthenticated: boolean, state: RouterStateSnapshot): void {
    if (!isAuthenticated) {
      this.router.navigate(['/pages/auth/login'], {
        queryParams: {
          returnUrl: state.url
        }
      });
    }
  }

}
