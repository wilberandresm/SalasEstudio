import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {

  constructor(private _autenticacion: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this._autenticacion.logout();
  }
}
