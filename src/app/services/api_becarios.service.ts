import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class apiBecarios {

  constructor(private httpClient: HttpClient) { }

  getBecarios(): Observable<any> {
    // TODO: CAMBIAR LA BASE DE LA API A UNA VARIABLE CONSTANTE
    return this.httpClient.get("https://guadaltech-fullstack.herokuapp.com/api/becarios/")
  }
}