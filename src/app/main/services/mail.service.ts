import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    public _HttpClient: HttpClient
  ) { 

  }



  send(mail: any):Observable<any> {
    console.log("send", mail)
    if (mail.adjuntos == '') mail.adjuntos = undefined

    return this._HttpClient.post('http://localhost:3000/sendmail', mail)
  }


}
