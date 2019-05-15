import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/autenticacion.service';
import { NgForm } from '@angular/forms';
import { LoginModel } from 'src/app/models/login.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: LoginModel = new LoginModel();
  constructor( private _autenticacion: AuthService, private router: Router) { }

  ngOnInit() {
    if(this._autenticacion.isAutenticado){
      this.router.navigate(['/reservar']);
    }

  }

  login(form: NgForm){
    this.user.usuario = form.value.username;
    this.user.contraseña = form.value.password;
    this._autenticacion.login(this.user);
  }
}
