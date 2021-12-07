import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn: boolean = false
  constructor(public firebaseAuth: AngularFireAuth) { }

  async signIn(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(result.user));
    }).catch(error => {
      alert(error)
    })
  }

  async signUp(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(result.user));
    }).catch(error => {
      alert(error)
    })
  }

  logout () {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }
}
