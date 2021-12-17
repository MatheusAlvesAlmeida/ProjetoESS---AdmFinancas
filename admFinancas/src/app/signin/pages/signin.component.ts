import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {
  
  isSignedIn = false;

  email: string = "";
  password: string = "";

  constructor(public firebaseService: FirebaseService, private router: Router) { }

  ngOnInit(): void {
  }

  async onSignUp (email: string, password: string) {
    await this.firebaseService.signUp(email, password);
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
      this.router.navigate(['/home']);
    }
  }

}
