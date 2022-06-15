import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  correo: string;
  password: string;

  divt_true = 1;

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  async login() {
    const respuesta = await this.authenticationService.login(
      this.correo,
      this.password
    );
    console.log('Esta es la respuesta ->', respuesta);
    if (respuesta) {
      this.router.navigate(['/map']);
    } else {
      console.log('No existe el usuario');
    }
  }

  async singIn() {
    const resp = await this.authenticationService.singIn(
      this.correo,
      this.password
    );
  }

  change(value) {
    this.divt_true = value;
  }
}
