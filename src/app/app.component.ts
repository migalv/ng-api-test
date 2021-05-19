import { Component } from '@angular/core';
import { Becario } from './models/becario';
import { apiBecarios } from './services/api_becarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prueba API Angular';
  becarios: Becario[];

  constructor(private _apiBecarios: apiBecarios) {
    this.becarios = [];
  }

  ngOnInit() {
    this._apiBecarios.getBecarios().subscribe(data => {
      data.forEach((becario: any) => {
        this.becarios.push(
          new Becario(
            becario.id,
            becario.nombre,
            becario.apellidos,
            becario.puesto,
            becario.horario,
            becario.responsables,
            becario.fechaalta,
          ),
        );
      });
    });
  }
}
