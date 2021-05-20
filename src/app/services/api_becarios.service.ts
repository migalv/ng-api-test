import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Becario } from '../models/becario';

@Injectable()
export class apiBecarios {
  base_url: string;

  constructor(private httpClient: HttpClient) {
    this.base_url = "https://guadaltech-fullstack.herokuapp.com/api";
  }

  getBecarios(): Observable<any> {
    return this.httpClient.get(this.base_url + "/becarios")
  }

  deleteBecario(id: string): Observable<any> {
    return this.httpClient.delete(this.base_url + "/becarios/" + id);
  }

  editBecario(becario: Becario) {
    return this.httpClient.patch(this.base_url + "/becarios/" + becario.id, becario);
  }
}