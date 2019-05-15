import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './autenticacion.service';


@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private _authService: AuthService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this._authService.isAutenticado()){
            return true;
        }
        else{
            this.router.navigate(['/login']);
            return false;
        }
    }
}







