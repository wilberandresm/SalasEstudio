    
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Router} from '@angular/router';
import { Global } from './global';
import { LoginModel } from '../models/login.model';

@Injectable()
export class AuthService{
    private httpOptions: any;
    public user: LoginModel = new LoginModel();
    public url: string;
    public error: string;
    constructor(private http: HttpClient, private router: Router) 
    {
        this.httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        this.url = Global.url;
    }

    login(user: LoginModel){
        this.user.usuario = user.usuario;
        this.user.contraseña = user.contraseña;

        this.http.post(this.url+'login/'+user.usuario+'/'+user.contraseña,this.httpOptions).subscribe(
          data => {
            localStorage.setItem('user', this.user.usuario);
            localStorage.setItem('token', data['token']);
            console.log(data);
            this.router.navigate(['/reservar']);
          },
          err => {
            this.error =  err['error'];
          },
        );
    }

  isAutenticado(){
      return localStorage.getItem('token');
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}