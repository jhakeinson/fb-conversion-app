import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string) {
    if(!(email === "admin@demo.com" && password === "password")) {
      return false;
    }

    localStorage.setItem("token", "i_am_a_token");

    return true;
  }

  isLoggedIn() {
    return !!(localStorage.getItem('token'));
  }
}
