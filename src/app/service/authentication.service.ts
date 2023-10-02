import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private router: Router ) { }

  private isAuthneticated = false

  loginUser() {
    this.isAuthneticated = true
    setTimeout(() => {
      this.router.navigate(['']); 
    }, 1200)
  }
  logout() {
    this.isAuthneticated = false
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthneticated
  }


}
