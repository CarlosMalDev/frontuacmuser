import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(
    public _HttpClient: HttpClient
  ) {

  }


  setRgstUser(params: any):Observable<any> {
    return this._HttpClient.post('http://localhost:3000/add', params)
  }

}
