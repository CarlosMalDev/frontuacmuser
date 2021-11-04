import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor(
    private _Router: Router,

  ) { }

  ngOnInit(): void {
  }



  route(idTipo: number, idValue: number) {
    console.log("route", idTipo, idValue)
    this._Router.navigate(['busqueda', idTipo, idValue])
  }

}
