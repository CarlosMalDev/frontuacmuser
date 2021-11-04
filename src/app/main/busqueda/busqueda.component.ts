import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  idTipo: number = 0
  idValue: number = 0

  titulo: string = ''
  subTitulo: string = ''

  tiposBsqd: Array<any> = [
    {id: 1, descripcion: 'Carrera'},
    {id: 2, descripcion: 'Autor'},
    {id: 3, descripcion: 'Titulo'},
    {id: 4, descripcion: 'Fecha'}
  ]

  tiposValue: Array<any> = [
    {id: 1, descripcion: 'Ciencias Ambientales y Cambio Climático.'},
    {id: 2, descripcion: 'Autor'},
    {id: 3, descripcion: 'Titulo'},
    {id: 4, descripcion: 'Fecha'}
  ]

  constructor(
    private _ActivatedRoute: ActivatedRoute,

  ) {

  }

  ngOnInit(): void {
    console.log("BusquedaComponent")

    this._ActivatedRoute.params.subscribe(params => {
      this.idTipo = parseInt(params['idTipo']),
      this.idValue = parseInt(params['idValue'])
    })
    

    this.loadTitulo()
    this.getBsqd()
  }

  getBsqd() {

    // let params = {
    //   idTipo: this.registro.nombre,
    //   apaterno: this.registro.apaterno,
    //   amaterno: this.registro.amaterno,
    //   matricula: this.registro.matricula,
    //   email: this.registro.email,
    //   fchaCrcn: getdate
    // }
    // this._RegistroService.setRgstUser(params).subscribe(
    //   response => {
    //     if (response.status == 'ok') {
    //       console.log(response)
    //       this._toastr.success('Se ha guardado el usuario, le llegara un correo electrónico de su registro.','Éxito')
    //       // this.sendEmail()
    //     } else {
    //       console.log("error en setRgstUser.")  
    //     }
    //   }, error => {
    //     console.log("error en setRgstUser")
    //   }
    // )
  }

  loadTitulo () {
    console.log("this.idTipo", this.idTipo, this.idValue)
    switch (this.idTipo) {
      case 1:
        let tipoBsqd = this.tiposBsqd.filter(item => item.id == this.idValue)

        let tipoValue = this.tiposValue.filter(item => item.id == this.idValue)

        this.titulo = tipoBsqd[0].descripcion
        
        this.subTitulo = tipoValue[0].descripcion
      break;
    }
    
  }
}
