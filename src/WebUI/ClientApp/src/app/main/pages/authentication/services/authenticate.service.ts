import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/auth';
import { Subscription } from 'rxjs';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { Role } from './Role';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  public user: Observable<firebase.User | null>;
  userEventsSubscription: Subscription;
  private currentUserRole: string;

  constructor(private firebaseAuth: AngularFireAuth, private jwtInterceptorService: JwtInterceptorService, private router: Router) {
    firebase.initializeApp(environment.firebase);
    this.user = firebaseAuth.authState;
    this.userEventsSubscription = this.user.subscribe(user => { if (user) {
      user.getIdTokenResult().then(tokenResult => {
        jwtInterceptorService.setJwtToken(tokenResult.token);
        if (tokenResult.claims.admin) { this.currentUserRole = 'admin'; }
        else if (tokenResult.claims.gold) { this.currentUserRole = 'gold'; }
        else if (tokenResult.claims.platinum) { this.currentUserRole = 'platinum'; }
        else { this.currentUserRole = 'free'; }
      });
    }});
  }

  
  public createUserWithEmailAndPassword(email, password): Promise<any> {
    
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(error  => {
      // Handle Errors here.
      const errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === 'auth/weak-password') {
        errorMessage = 'The password is too weak.';
      } 
      else if (errorCode === 'auth/email-already-in-use') {
        errorMessage = 'Thrown if there already exists an account with the given email address.';
      }
      else if (errorCode === 'auth/invalid-email'){
        errorMessage = 'Thrown if the email address is not valid.';
      }
      else{
        errorMessage = error;
      }
      return errorCode;
    });

  }


  public signInEmailAndPassword(email, password): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password).then(result => {
      result.user.getIdTokenResult().then(idToken => {
      });
      return result;
    }).catch(error => {
      console.warn(`Error code: ${error.code}, message: ${error.message}, email: ${error.email}, credential: ${error.credential}`);
      return error;
    });
  }

 public logout(): void {
    firebase.auth()
      .signOut()
        .then(result => {
          this.router.navigate(['/pages/auth/login']);
        })
        .catch(error => {
          console.warn(error);
        });
  }


  // Add Role cloud functions
  public addRole(email: string, role: Role): void{

    const functions = firebase.functions();
    const addRole = functions.httpsCallable('addRole');
    addRole({email: email, role: role})
    .then(result => {
    });
  }

  public getUserMail(): string {
    return firebase.auth().currentUser.email;
  }
  public getUserId(): string {
    return firebase.auth().currentUser.uid;
  }

  public getUserRole(): string {
    return  this.currentUserRole;
  }
  
  public isAuthenticated(): Observable<boolean> {
    return this.firebaseAuth.authState.pipe(map(u => !!u));
  }

  public isAuthenticatedPlatinum(): Observable<boolean> {
    if (this.getUserRole() === 'platinum') {
      return this.firebaseAuth.authState.pipe(map(u => !!u));
    }
    else{
      return Observable.of(false);
    }
  }

  public isAuthenticatedGold(): Observable<boolean> {
    if (this.getUserRole() === 'gold') {
      return this.firebaseAuth.authState.pipe(map(u => !!u));
    }
    else{
      return Observable.of(false);
    }
  }
}
