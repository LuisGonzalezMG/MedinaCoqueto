import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  registrar(usuario: Usuario) {
    return createUserWithEmailAndPassword(this.auth, usuario.email, usuario.pass);
  }

  login(usuario: Usuario) {
    return signInWithEmailAndPassword(this.auth, usuario.email, usuario.pass);
  }

  logout() {
    return signOut(this.auth);
  }
}

export interface Usuario {
  email: string,
  nombre: string,
  pass: string
}
