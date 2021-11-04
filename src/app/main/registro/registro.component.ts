import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { RegistroService } from '../services/registro.service'
import { MailService } from '../services/mail.service'

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import Validation from './utils/validation';

import * as moment from 'moment';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [RegistroService,ToastrService]
})
export class RegistroComponent implements OnInit {

  registro: any
  
  public registroForm = this._formBuilder.group({
    nombre: ['', Validators.required],
    amaterno: ['', Validators.required],
    apaterno: ['', Validators.required],
    matricula: ['', Validators.required],
    email: ['', Validators.required],
  })


  constructor(
    private _RegistroService: RegistroService,
    private _MailService: MailService,
    private _toastr: ToastrService,
    
    private _formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.registro = {
      nombre: ''
    }
    
  }


  sendEmail() {
    let email = {
      de: 'carlosmaldev@uacm.com',
      para: this.registro.email,
      cc: 'kmbcmb@hotmail.com',
      cco: 'carlosmaldev@gmail.com',
      mensaje: 'ola',
      adjuntos: []
    }
    this._MailService.send(email).subscribe(
      response => {
        console.log('correo enviado')
      }, error => {
        console.log('correo noenviado')
      }
    )
  }

  saveUser() {
    console.log("guardando")
    let getdate = moment()
 
    let params = {
      nombre: this.registro.nombre,
      apaterno: this.registro.apaterno,
      amaterno: this.registro.amaterno,
      matricula: this.registro.matricula,
      email: this.registro.email,
      fchaCrcn: getdate
    }
    this._RegistroService.setRgstUser(params).subscribe(
      response => {
        if (response.status == 'ok') {
          console.log(response)
          this._toastr.success('Se ha guardado el usuario, le llegara un correo electrónico de su registro.','Éxito')
          // this.sendEmail()
        } else {
          console.log("error en setRgstUser.")  
        }
      }, error => {
        console.log("error en setRgstUser")
      }
    )
  }

  validarEmail(valor: any) {
    let valid = false;
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
    //  console.log("La dirección de email " + valor + " es correcta.");
     valid = true;
    } else {
      // console.log("La dirección de email es incorrecta.");
     valid = false;
    }
    return valid;
  }
  validaCampos(){
    let valid = false
    if (this.registro.nombre == '' || this.registro.apaterno == '' || this.registro.amaterno == '' || this.registro.matricula == '' ) {
      valid = false
    } else {
      valid = true
    }
    return valid
  }

  validarForm() {
    console.log("registro email a", this.registro)
    if(!this.validarEmail(this.registro.email)){
      this._toastr.warning('Ingrese una dirección que tenga formato válido','Aviso')
      return;
    }
    if (!this.validaCampos()) {
      this._toastr.warning('Ingrese todos los datos','Aviso')
      return;
    }
    let formatUacm = this.registro.email.toLowerCase().split('@')[1].split('.')[0]
    // if(formatUacm.indexOf('uacm') != 0 ) {
    //   this._toastr.warning('Ingrese una dirección de la UACM válida','Aviso')
    //   return;
    // }
    this.saveUser()
  }

}
