import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FacebookAuthProvider } from 'firebase/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(public auth: AngularFireAuth) {}
  login(correo: string, password: string) {
    return this.auth.signInWithEmailAndPassword(correo, password);
  }

  singIn(correo: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(correo, password);
  }
}
