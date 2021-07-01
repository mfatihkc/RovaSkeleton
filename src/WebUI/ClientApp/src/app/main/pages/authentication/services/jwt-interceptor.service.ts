import { Injectable, OnInit } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http/http';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { mergeMap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService {

  private token: string | null;

  constructor(private auth: AngularFireAuth) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.auth.idToken.pipe(
      mergeMap((token: any) => {
        if (token) {
          req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
        }
        return next.handle(req);
      }));
  }

  // Another option
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   if (this.token) {
  //     const clone = req.clone({ setHeaders: { 'Authorization': `Bearer ${this.token}` } });
  //     return next.handle(clone);
  //   }
  //   return next.handle(req);
  // }

  getJwtToken(): string {
    return this.token;
  }

  setJwtToken(token: string): void {
    this.token = token;
  }

  removeJwtToken(): void {
    this.token = null;
  }
}
