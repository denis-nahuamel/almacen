import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data


 constructor(private angularFireAuth: AngularFireAuth) {
  this.userData = angularFireAuth.authState;
  }

  /* Sign up */
  SignUp(email: string, password: string) {
  this.angularFireAuth.createUserWithEmailAndPassword(email, password)
  .then(res => {
  console.log('You are Successfully signed up!', res);
  })
  .catch(error => {
  console.log('Something is wrong:', error.message);
  });
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
        console.log('Youre in!');
    })
    .catch(err => {
        console.log('Something went wrong:',err.message);
    });
  }

  /* Sign out */
  SignOut() {
  this.angularFireAuth.signOut();
  }


}
