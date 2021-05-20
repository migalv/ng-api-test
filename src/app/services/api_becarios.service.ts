import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = "https://guadaltech-fullstack.herokuapp.com/api"

@Injectable()
export class apiBecarios {

  constructor(private httpClient: HttpClient) { }

  getBecarios(): Observable<any> {
    return this.httpClient.get(base_url + "/becarios")
  }
}